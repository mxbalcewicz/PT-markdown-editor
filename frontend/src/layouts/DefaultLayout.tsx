import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import {
  MdFormatBold as IconBold,
  MdFormatItalic as IconItalic,
  MdFormatListBulleted as IconListBulleted,
  MdFormatListNumbered as IconListNumbered,
  MdInsertLink as IconInsertLink,
} from 'react-icons/all';
import Divider from '../components/Divider/Divider';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar
        left={
          <>
            <Button text>
              <IconBold />
            </Button>
            <Button text>
              <IconItalic />
            </Button>
            <Divider />
            <Button text>
              <IconListBulleted />
            </Button>
            <Button text>
              <IconListNumbered />
            </Button>
            <Divider />
            <Button text>
              <IconInsertLink />
            </Button>
          </>
        }
      />
      {children}
    </>
  );
};

export default DefaultLayout;
