import React, { useState } from 'react';
import flowMenuItemStyles from './flow-menu-item.styles';
import MenuItem from '../menu-item';
import ActionMenu, { Action } from '../action-menu';
import {
  AccountTree,
  AddCircle,
  Build,
  Description,
  FileCopy,
  RemoveCircle
} from '@material-ui/icons';

const ACTIONS: Action[] = [
  {
    label: 'SCE',
    name: 'sce',
    icon: <AccountTree />
  },
  {
    label: 'API',
    name: 'api',
    icon: <Description />
  },
  {
    label: 'Open postman',
    name: 'open-postman',
    icon: <Build />
  },
  {
    label: 'Make a copy',
    name: 'make-a-copy',
    icon: <FileCopy />
  },
  {
    label: 'Delete',
    name: 'delete',
    icon: <RemoveCircle />
  },
  {
    label: 'Create',
    name: 'create',
    icon: <AddCircle />
  }
];

interface Props {
  title: string;
  onClick: (action: string) => void;
}

const FlowMenuItem: React.FC<Props> = ({ title, onClick }) => {
  const classes = flowMenuItemStyles();
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(value => !value);
  };

  return (
    <div className={classes.item} onMouseEnter={toggleActions} onMouseLeave={toggleActions}>
      <div>
        <MenuItem title={title} />
      </div>
      {showActions && (
        <div className={classes.actionListWrapper}>
          <ActionMenu items={ACTIONS} onItemClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default FlowMenuItem;
