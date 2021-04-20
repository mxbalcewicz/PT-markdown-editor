import React from 'react';
import {
  MdRadioButtonChecked as CheckedIcon,
  MdRadioButtonUnchecked as UncheckedIcon,
} from 'react-icons/all';
import useRadioContext from './useRadioContext';
import {
  StyledIcon,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled';
import Group, { IRadioGroupProps } from './Group';

interface IRadioProps {
  label?: string;
  value: string;
}

interface RadioGroupComposition {
  Group: React.FC<IRadioGroupProps>;
}

const Radio: React.FC<IRadioProps> & RadioGroupComposition = ({
  value,
  label,
}) => {
  const { radioValue, handleOnChange, name } = useRadioContext();
  const isChecked = value === radioValue;

  const icon = isChecked ? (
    <CheckedIcon size={24} />
  ) : (
    <UncheckedIcon size={24} />
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.value);
  };

  return (
    <StyledLabel>
      <StyledInputContainer>
        <StyledInput
          type="radio"
          name={name}
          value={value}
          onChange={handleChange}
          checked={isChecked}
        />
        <StyledIcon checked={isChecked!}>{icon}</StyledIcon>
      </StyledInputContainer>
      <span>{label}</span>
    </StyledLabel>
  );
};

Radio.Group = Group;

export default Radio;
