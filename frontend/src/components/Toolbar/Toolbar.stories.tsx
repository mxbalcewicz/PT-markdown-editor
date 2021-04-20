import React from 'react';
import { Meta, Story } from '@storybook/react';

import Toolbar, { IToolbarProps } from './Toolbar';

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  argTypes: {},
} as Meta;

// @ts-ignore
const Template: Story<IToolbarProps> = () => <Toolbar />;

export const Default = Template.bind({});
Default.args = {};
