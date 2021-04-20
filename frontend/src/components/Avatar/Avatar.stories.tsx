import React from 'react';
import { Meta, Story } from '@storybook/react';
import { avatar } from './__mocks__/data';

import Avatar, { IAvatarProps } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    avatar: {
      control: {
        type: 'object',
      },
      defaultValue: avatar,
    },
  },
} as Meta;

// @ts-ignore
const Template: Story<IAvatarProps> = ({ avatar, ...args }) => {
  return <Avatar {...args} src={avatar.src} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 32,
};
