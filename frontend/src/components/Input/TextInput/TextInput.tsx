import React from 'react';
import { InputProps, StyledInput, StyledLabel, StyledSpan } from './styled';
import Error from '../Error';

export interface ITextInputProps extends InputProps {
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, ITextInputProps>(
  (
    {
      type = 'text',
      required = false,
      block = false,
      rounded = false,
      name,
      label,
      placeholder,
      onChange,
      onBlur,
      error,
    },
    ref,
  ) => {
    return (
      <StyledLabel>
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledInput
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          block={block}
          rounded={rounded}
        />
        <Error>{error}</Error>
      </StyledLabel>
    );
  },
);

export default TextInput;
