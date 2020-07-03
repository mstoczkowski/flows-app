import React from 'react';
import { Typography } from '@material-ui/core';
import listHeaderStyles from './list-header.styles';

interface Props {
  title: string;
  actionButton?: React.ReactElement;
}

const ListHeader: React.FC<Props> = ({ title, actionButton }) => {
  const classes = listHeaderStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h6">{title}</Typography>
      {actionButton}
    </div>
  );
};

export default ListHeader;
