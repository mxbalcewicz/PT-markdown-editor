import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import TextInput, { ITextInputProps } from './TextInput';

export default {
  title: 'Atoms/Inputs/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ITextInputProps> = (args) => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <TextInput
      {...args}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input label',
  placeholder: 'type something...',
  error: 'error message',
};

export const Block = Template.bind({});
Block.args = {
  ...Default.args,
  block: true,
};
