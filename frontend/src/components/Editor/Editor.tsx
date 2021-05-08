import React, { useCallback, useMemo, useState } from 'react';
import { withReact, Slate } from 'slate-react';
import { createEditor, Descendant } from 'slate';
import { StyledEditable } from './styled';
import { withHistory } from 'slate-history';
import withShortcuts from '../../hoc/withShortcuts';
import Element from './Element';

const initialContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

interface IEditorProps {}

const Editor: React.VFC<IEditorProps> = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );

  const [content, setContent] = useState<Descendant[]>(initialContent);

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(newContent) => setContent(newContent)}
    >
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
