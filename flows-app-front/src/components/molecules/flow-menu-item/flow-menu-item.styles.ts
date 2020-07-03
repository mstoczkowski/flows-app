import { makeStyles } from '@material-ui/core/styles';

const flowMenuItemStyles = makeStyles(() => ({
  item: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: '#f7f7f7'
    }
  },
  actionListWrapper: {
    width: '50%',
    position: 'absolute',
    top: 0,
    right: 0
  }
}));

export default flowMenuItemStyles;
