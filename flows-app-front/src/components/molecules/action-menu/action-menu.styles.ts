import { makeStyles } from '@material-ui/core/styles';

const actionMenuStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    background:
      'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(247,247,247,1) 10%, rgba(247,247,247,1) 100%)',
    paddingLeft: '20px'
  }
}));

export default actionMenuStyles;
