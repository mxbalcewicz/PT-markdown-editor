import React from 'react';
import { Input } from './EditableText.styled';
import { noop } from '../../../utils';

export interface ITextInputProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const EditableText: React.VFC<ITextInputProps> = ({
  name,
  placeholder = '',
  onChange = noop,
  onBlur = noop,
  value,
}) => (
  <Input
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    placeholder={placeholder}
    name={name}
    type="text"
  />
);

export default EditableText;
