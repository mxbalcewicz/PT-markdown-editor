import React, { useCallback, useMemo, useState } from 'react';
import { withReact, Slate } from 'slate-react';
import {
  createEditor,
  Descendant,
  Operation,
  Editor as SlateEditor,
} from 'slate';
import { StyledEditable } from './styled';
import { withHistory } from 'slate-history';
import withShortcuts from '../../hoc/withShortcuts';
import Element from './Element';
import { useSocket } from '../../hooks';

const initialContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const ignoredOperations = ['set_selection'];

interface IEditorProps {}

const Editor: React.VFC<IEditorProps> = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );

  const [content, setContent] = useState<Descendant[]>(initialContent);

  const handleUpdate = (operations: any) => {
    SlateEditor.withoutNormalizing(editor, () => {
      operations.forEach((operation: Operation) => editor.apply(operation));
    });
  };

  const handleChange = (changes: any) => {
    setContent(changes);

    const opts = editor.operations
      .filter((operation) => {
        if (ignoredOperations.includes(operation.type)) return false;

        // @ts-ignore
        if (!!operation.source && operation.source === 'remote') return false;

        return true;
      })
      .map((operation) => ({ ...operation, source: 'client' }));

    if (!opts.length) return;

    socket?.emit('update', opts);
  };

  const { socket } = useSocket({
    endpoint: 'localhost:3020',
    onUpdate: handleUpdate,
  });

  return (
    <Slate editor={editor} value={content} onChange={handleChange}>
      <StyledEditable
        spellCheck
        autoFocus
        renderElement={renderElement}
        placeholder="Write some markdown..."
      />
    </Slate>
  );
};

export default Editor;
