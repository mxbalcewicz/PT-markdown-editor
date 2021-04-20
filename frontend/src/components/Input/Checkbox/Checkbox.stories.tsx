import React from 'react';
import { Meta, Story } from '@storybook/react';

import Checkbox, { ICheckboxProps } from './Checkbox';
import { Controller, useForm } from 'react-hook-form';

export default {
  title: 'Atoms/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ICheckboxProps> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Controller
      control={control}
      name="createAccount"
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Checkbox
          {...args}
          value={value}
          onChange={onChange}
          error={errors.createAccount?.message}
        />
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input label',
  error: 'error message',
};
