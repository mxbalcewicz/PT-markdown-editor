import React from 'react';
import { Meta, Story } from '@storybook/react';
import { avatars } from './__mocks__/data';

import AvatarsList, { IAvatarsListProps } from './AvatarsList';

export default {
  title: 'Molecules/UsersList',
  component: AvatarsList,
  argTypes: {
    avatars: {
      control: {
        type: 'array',
      },
      defaultValue: avatars,
    },
  },
} as Meta;

// @ts-ignore
const Template: Story<IAvatarsListProps> = (args) => <AvatarsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 36,
};
