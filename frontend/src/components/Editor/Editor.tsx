import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector, useSocket, useDebounce } from 'hooks';
import { withReact, Slate } from 'slate-react';
import {
  createEditor,
  Descendant,
  Operation,
  Editor as SlateEditor,
} from 'slate';
import { StyledEditable } from './styled';
import { withHistory } from 'slate-history';
import withShortcuts from 'hoc/withShortcuts';
import Element from './Element';
import { save } from 'store/docs/actions';
import { User } from 'store/users/slice';
import { setUsers } from 'store/users/actions';
import config from 'config';
const { api } = config;

const defaultContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const ignoredOperations = ['set_selection'];

interface IEditorProps {
  isReadOnly?: boolean;
}

const Editor: React.VFC<IEditorProps> = ({ isReadOnly = false }) => {
  const dispatch = useAppDispatch();
  const document = useAppSelector(({ docs }) => docs.document);
  const initialContent =
    document!.content.length > 0 ? document!.content : defaultContent;

  const [content, setContent] = useState<Descendant[]>(initialContent);
  const debouncedContent = useDebounce(content, 2000);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );

  useEffect(() => {
    if (!isReadOnly) dispatch(save({ content, hash: document!.hash }));
  }, [debouncedContent]);

  const handleUpdate = (operations: any) => {
    SlateEditor.withoutNormalizing(editor, () => {
      operations.forEach((operation: Operation) => editor.apply(operation));
    });
  };

  const handleUsersUpdate = (users: User[]) => {
    dispatch(setUsers(users));
  };

  const handleChange = (changes: any) => {
    setContent(changes);

    const opts = editor.operations
      .filter((operation) => {
        if (ignoredOperations.includes(operation.type)) {
          return false;
        }

        // @ts-ignore
        if (!!operation.source && operation.source === 'remote') {
          return false;
        }

        return true;
      })
      .map((operation) => ({ ...operation, source: 'client' }));

    if (!opts.length) return;

    socket?.emit('update', opts);
  };

  const { socket } = useSocket({
    endpoint: `${api.hostname}:${api.socketPort}`,
    onUpdate: handleUpdate,
    onUsersUpdate: handleUsersUpdate,
    room: document!.id,
  });

  return (
    <Slate editor={editor} value={content} onChange={handleChange}>
      <StyledEditable
        spellCheck
        autoFocus
        readOnly={isReadOnly}
        renderElement={renderElement}
        placeholder="Write some markdown..."
      />
    </Slate>
  );
};

export default Editor;
