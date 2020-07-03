import { makeStyles } from '@material-ui/core/styles';

const createFlowFormStyles = makeStyles(
  () => ({
    wrapper: {
      width: '400px'
    },
    fieldWrapper: {
      margin: '15px 0'
    }
  }),
  { name: 'CreateFlowForm' }
);

export default createFlowFormStyles;
