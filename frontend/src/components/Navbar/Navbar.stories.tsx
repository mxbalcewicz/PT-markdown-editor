import React, { useContext } from 'react';
import { Meta, Story } from '@storybook/react';

import Navbar, { INavbarProps } from './Navbar';
import Toolbar from '../Toolbar';
import AvatarsList from '../UsersList';
import Button from '../Button';
import { ThemeContext } from 'styled-components';
import { avatars } from '../UsersList/__mocks__/data';

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
  const theme = useContext(ThemeContext);
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
