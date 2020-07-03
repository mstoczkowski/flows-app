import React from 'react';
import { ListItem } from '@material-ui/core';
import menuItemButtonStyles from './menu-item-button.styles';

interface Props {
  title: string;
  onClick?: () => void;
  color?: string;
  icon?: React.ReactElement;
}

const MenuItemButton: React.FC<Props> = ({ title, onClick, color, icon }) => {
  const classes = menuItemButtonStyles({ color });
  return (
    <ListItem button onClick={onClick} className={classes.button}>
      <div className={classes.title}>
        <div>{title}</div>
        {icon}
      </div>
    </ListItem>
  );
};

export default MenuItemButton;
