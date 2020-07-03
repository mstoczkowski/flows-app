import React from 'react';
import ListHeader from '../../atoms/list-header';
import menuListStyles from './menu-list.styles';
import { List } from '@material-ui/core';

interface Props {
  title: string;
  actionButton?: React.ReactElement;
}

const MenuList: React.FC<Props> = ({ title, actionButton, children }) => {
  const classes = menuListStyles();
  return (
    <>
      <div className={classes.header}>
        <ListHeader title={title} actionButton={actionButton} />
      </div>
      <List component="div">{children}</List>
    </>
  );
};

export default MenuList;
