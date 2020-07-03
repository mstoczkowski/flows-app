import React from 'react';
import errorMessageStyles from './form-error-message.styles';

interface Props {
  message: string;
}

const FormErrorMessage: React.FC<Props> = ({ message }) => {
  const classes = errorMessageStyles();

  return <p className={classes.error}>{message}</p>;
};

export default FormErrorMessage;
