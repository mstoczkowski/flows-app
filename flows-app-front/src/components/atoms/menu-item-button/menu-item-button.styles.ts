import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  color?: string;
}

const menuItemButtonStyles = makeStyles<Theme, Props>(
  () => ({
    button: {
      color: props => props.color || '#000',
      minHeight: '50px',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }),
  { name: 'MenuItemButton' }
);

export default menuItemButtonStyles;
