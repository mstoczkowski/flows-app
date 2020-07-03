import { makeStyles } from '@material-ui/core/styles';

const listHeaderStyles = makeStyles(
  () => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px'
    }
  }),
  { name: 'ListHeader' }
);

export default listHeaderStyles;
