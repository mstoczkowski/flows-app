import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

interface Props {
  title: string;
  icon: React.ReactElement;
  onClick?: (event: React.MouseEvent) => void;
}

const MenuIconItem: React.FC<Props> = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick} size="small">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default MenuIconItem;
