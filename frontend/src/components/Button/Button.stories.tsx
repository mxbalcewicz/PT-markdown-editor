import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { IButtonProps } from './Button';
import theme from 'theme/theme';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: Object.values(theme.colors),
      },
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
  },
} as Meta;

// @ts-ignore
const Template: Story<IButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  color: theme.colors.primary,
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: theme.colors.primary,
  outlined: true,
};

export const Text = Template.bind({});
Text.args = {
  color: theme.colors.primary,
  text: true,
};
