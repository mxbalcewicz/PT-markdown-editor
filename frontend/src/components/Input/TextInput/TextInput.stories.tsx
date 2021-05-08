import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextInput, { ITextInputProps } from './TextInput';

export default {
  title: 'Atoms/Inputs/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<ITextInputProps> = (args) => {
  return <TextInput {...args} />;
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
