import { makeStyles } from '@material-ui/core/styles';

const menuListStyles = makeStyles(
  () => ({
    header: {
      borderBottom: '1px solid #f9f9f9'
    }
  }),
  { name: 'MenuList' }
);

export default menuListStyles;
