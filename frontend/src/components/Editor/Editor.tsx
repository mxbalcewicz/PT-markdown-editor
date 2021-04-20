import React, { useMemo, useState } from 'react';
import { withReact, Slate } from 'slate-react';
import { createEditor, Descendant } from 'slate';
import { StyledEditable } from './styled';

interface IEditorProps {}

const Editor: React.VFC<IEditorProps> = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Lorem ipsum' }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <StyledEditable />
    </Slate>
  );
};

export default Editor;
