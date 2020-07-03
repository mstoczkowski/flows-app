import React from 'react';
import MenuItemButton from '../../atoms/menu-item-button';
import menuItemStyles from './menu-item.styles';

interface Props {
  title: string;
  subMenu?: React.ReactElement | boolean;
  color?: string;
  icon?: React.ReactElement;
  onClick?: (category: string) => void;
  active?: boolean;
}

const MenuItem: React.FC<Props> = ({ title, subMenu, active, color, icon, onClick }) => {
  const classes = menuItemStyles({ active: active || false });

  const handleMenuItemClick = () => {
    !!onClick && onClick(title);
  };

  return (
    <div className={classes.wrapper}>
      <MenuItemButton title={title} onClick={handleMenuItemClick} color={color} icon={icon} />
      {!!subMenu && <div className={classes.subMenu}>{subMenu}</div>}
    </div>
  );
};

export default MenuItem;
