import { makeStyles } from '@material-ui/core/styles';

const errorMessageStyles = makeStyles(
  () => ({
    error: {
      color: 'red'
    }
  }),
  { name: 'ErrorMessage' }
);

export default errorMessageStyles;
