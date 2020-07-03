import { makeStyles } from '@material-ui/core/styles';

const MENU_WIDTH = 240;

const menuStyles = makeStyles(
  () => ({
    menu: {
      width: MENU_WIDTH
    },
    paper: {
      overflow: 'visible',
      width: MENU_WIDTH,
      background: '#222C34'
    }
  }),
  { name: 'Menu' }
);

export default menuStyles;
