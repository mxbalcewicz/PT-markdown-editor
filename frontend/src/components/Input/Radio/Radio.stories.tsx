import React from 'react';
import { Meta, Story } from '@storybook/react';

import RadioGroup, { IRadioGroupProps } from './Group';
import { Controller, useForm } from 'react-hook-form';
import Radio from './Radio';

export default {
  title: 'Atoms/Inputs/RadioGroup',
  component: RadioGroup,
  argTypes: {
    defaultValue: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<IRadioGroupProps> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Controller
      control={control}
      name="radio"
      render={({ field: { onChange, value } }) => (
        <Radio.Group
          {...args}
          defaultValue={value}
          onChange={onChange}
          error={errors.radio?.message}
        >
          <Radio label="Test radio 1" value="one" />
          <Radio label="Test radio 2" value="two" />
          <Radio label="Test radio 3" value="three" />
        </Radio.Group>
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  error: 'error message',
};
