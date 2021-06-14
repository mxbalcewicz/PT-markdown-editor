import React from 'react';
import { Meta, Story } from '@storybook/react';

import Navbar, { INavbarProps } from './Navbar';
import Toolbar from 'components/Toolbar';
import AvatarsList from 'components/AvatarsList';
import { avatars } from 'components/AvatarsList/__mocks__/data';
import Button from 'components/Button';
import { useTheme } from 'styled-components';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
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
const Template: Story<INavbarProps> = ({ avatars }) => {
  const theme = useTheme();
  return (
    <Navbar
      left={<Toolbar />}
      right={
        <>
          <AvatarsList size={36} avatars={avatars} />
          <Button sm color={theme.colors.primary}>
            Log in
          </Button>
        </>
      }
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
