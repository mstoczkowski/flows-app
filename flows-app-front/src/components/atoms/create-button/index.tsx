import React from 'react';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

interface Props {
  onClick: () => void;
}

const CreateButton: React.FC<Props> = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <Add />
  </IconButton>
);

export default CreateButton;
