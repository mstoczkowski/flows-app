import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  active: boolean;
}

const menuItemStyles = makeStyles<Theme, Props>(
  () => ({
    wrapper: {
      position: 'relative',
      background: props => (props.active ? 'rgba(255,255,255, 0.2)' : 'transparent')
    },
    buttonWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    subMenu: {
      position: 'absolute',
      top: 0,
      left: '100%',
      width: '450px',
      maxHeight: '480px',
      overflowY: 'scroll',
      overflowX: 'visible',
      background: '#fff'
    }
  }),
  { name: 'MenuItem' }
);

export default menuItemStyles;
