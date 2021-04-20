import React from 'react';
import Button from '../Button';
import {
  MdFormatBold as IconBold,
  MdFormatItalic as IconItalic,
  MdFormatUnderlined as IconUnderlined,
  MdFormatListBulleted as IconListBulleted,
  MdFormatListNumbered as IconListNumbered,
  MdInsertLink as IconInsertLink,
} from 'react-icons/md';
import Divider from '../Divider';
import Tooltip from '../Tooltip';

export interface IToolbarProps {}

export type ToolbarItem = {
  tooltip?: string;
  icon: JSX.Element;
};

const tools: ToolbarItem[][] = [
  [
    { tooltip: 'Bold', icon: <IconBold /> },
    { tooltip: 'Italic', icon: <IconItalic /> },
    { tooltip: 'Underline', icon: <IconUnderlined /> },
  ],
  [
    { tooltip: 'Bulleted list', icon: <IconListBulleted /> },
    { tooltip: 'Numbered list', icon: <IconListNumbered /> },
  ],
  [{ tooltip: 'Link', icon: <IconInsertLink /> }],
];

const mapToToolButton = ({ tooltip, icon }: ToolbarItem) => (
  <Tooltip text={tooltip} key={tooltip}>
    <Button text>{icon}</Button>
  </Tooltip>
);

const Toolbar: React.VFC<IToolbarProps> = () => (
  <>
    {tools
      .map<React.ReactNode>((group) => group.map(mapToToolButton))
      .reduce((prev, curr, idx) => [prev, <Divider key={idx} />, curr])}
  </>
);

export default Toolbar;
