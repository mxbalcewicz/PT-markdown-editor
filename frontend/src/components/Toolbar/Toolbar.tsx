import React from 'react';
import Button from '../Button';
import {
  MdFormatBold as IconBold,
  MdFormatItalic as IconItalic,
  MdFormatListBulleted as IconListBulleted,
  MdFormatListNumbered as IconListNumbered,
  MdInsertLink as IconInsertLink,
} from 'react-icons/md';
import Divider from '../Divider';

interface IToolbarProps {}

const Toolbar: React.VFC<IToolbarProps> = () => {
  return (
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
  );
};

export default Toolbar;
