import React from 'react';
import {
  MdFormatBold as IconBold,
  MdFormatItalic as IconItalic,
  MdFormatUnderlined as IconUnderlined,
  MdFormatListBulleted as IconListBulleted,
  MdFormatListNumbered as IconListNumbered,
  MdInsertLink as IconInsertLink,
} from 'react-icons/md';
import Button from 'components/Button';
import Divider from 'components/Divider';
import Tooltip from 'components/Tooltip';
import { CustomElement } from 'plugins/slate/custom-types';

export interface IToolbarProps {}

export type ToolbarItem = {
  tooltip?: string;
  icon: React.ReactNode;
  type: CustomElement['type'];
};

const tools: ToolbarItem[][] = [
  [
    { tooltip: 'Bold', icon: <IconBold />, type: 'block-quote' },
    { tooltip: 'Italic', icon: <IconItalic />, type: 'list-item' },
    { tooltip: 'Underline', icon: <IconUnderlined />, type: 'list-item' },
  ],
  [
    {
      tooltip: 'Bulleted list',
      icon: <IconListBulleted />,
      type: 'bulleted-list',
    },
    { tooltip: 'Numbered list', icon: <IconListNumbered />, type: 'list-item' },
  ],
  [{ tooltip: 'Link', icon: <IconInsertLink />, type: 'link' }],
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
