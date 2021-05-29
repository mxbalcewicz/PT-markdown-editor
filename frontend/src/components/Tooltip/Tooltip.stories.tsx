import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from 'components/Button';
import Tooltip, { ITooltipProps } from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      defaultValue: 'tooltip text',
    },
  },
} as Meta;

// @ts-ignore
const Template: Story<ITooltipProps> = (args) => (
  <>
    <Tooltip {...args}>
      <Button>Example button</Button>
    </Tooltip>
  </>
);

export const Default = Template.bind({});
Default.args = {};
