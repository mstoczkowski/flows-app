import React, { useEffect, useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, List } from '@material-ui/core';
import menuStyles from './menu.styles';
import { Category } from '../../../@types/category';
import MenuItem from '../menu-item';
import FlowMenuItem from '../flow-menu-item';
import MenuList from '../menu-list';
import CreateButton from '../../atoms/create-button';

interface Props {
  items: Category[];
  onCategorySelect: (category: string) => void;
  onCreateFlowClick: () => void;
}

const Menu: React.FC<Props> = ({ items, onCategorySelect, onCreateFlowClick }) => {
  const classes = menuStyles();
  const [openedItem, setOpenedItem] = useState('');

  const handleActionClick = (flowCode: string) => (actionName: string) => {
    alert(`Action name: ${actionName}, Flow code: ${flowCode}`);
  };

  const handleCategoryClick = (category: string) => {
    if (category === openedItem) {
      setOpenedItem('');
      return;
    }

    setOpenedItem(category);
  };

  useEffect(() => {
    onCategorySelect(openedItem);
  }, [openedItem]);

  return (
    <Drawer
      variant="permanent"
      className={classes.menu}
      classes={{
        paper: classes.paper
      }}
    >
      <List component="nav">
        {items.map(item => (
          <MenuItem
            color="#ffffff"
            key={item.title}
            title={item.title}
            icon={<ChevronRightIcon />}
            onClick={handleCategoryClick}
            active={openedItem === item.title}
            subMenu={
              openedItem === item.title && (
                <MenuList
                  title={`${item.title} flows`}
                  actionButton={<CreateButton onClick={onCreateFlowClick} />}
                >
                  {item.flows.map((flow, index) => (
                    <FlowMenuItem
                      key={`${flow.name}-${index}`}
                      title={flow.name || flow.code}
                      onClick={handleActionClick(flow.code)}
                    />
                  ))}
                </MenuList>
              )
            }
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
