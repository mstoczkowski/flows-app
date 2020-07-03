import React from 'react';
import { List } from '@material-ui/core';
import MenuIconItem from '../../atoms/menu-icon-item';
import actionMenuStyles from './action-menu.styles';

export interface Action {
  label: string;
  name: string;
  icon: React.ReactElement;
}

interface Props {
  items: Action[];
  onItemClick: (actionLabel: string) => void;
}

const ActionMenu: React.FC<Props> = ({ items, onItemClick }) => {
  const classes = actionMenuStyles();
  return (
    <List component="div" className={classes.list}>
      {items.map(action => {
        return (
          <MenuIconItem
            key={action.name}
            title={action.label}
            icon={action.icon}
            onClick={() => onItemClick(action.label)}
          />
        );
      })}
    </List>
  );
};

export default ActionMenu;
