import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import UsersList from '../components/UsersList';
import Button from '../components/Button';
import { ThemeContext } from 'styled-components';

const DefaultLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  const users = [
    { id: 1, src: 'https://picsum.photos/64' },
    { id: 2, src: '' },
    { id: 3, src: 'https://picsum.photos/66' },
    { id: 4, src: 'https://picsum.photos/67' },
  ];

  return (
    <>
      <Navbar
        left={<Toolbar />}
        right={
          <>
            <UsersList size={36} avatars={users} />
            <Button sm color={theme.colors.primary}>
              Log in
            </Button>
          </>
        }
      />
      {children}
    </>
  );
};

export default DefaultLayout;
