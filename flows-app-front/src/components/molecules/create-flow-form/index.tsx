import React from 'react';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { Button, DialogActions, TextField } from '@material-ui/core';
import createFlowFormStyles from './create-flow.styles';
import { Flow } from '../../../@types/flow';
import FormErrorMessage from '../../atoms/form-error-message';

interface Props {
  onSubmit: (values: Flow) => void;
  onClose: () => void;
}

const FIELDS = {
  CODE: 'code',
  NAME: 'name'
};

const validate = (values: Flow) => {
  let errors: {
    [key: string]: string;
  } = {};

  if (!values.code) {
    errors.code = 'Field is required';
  } else if (!values.name) {
    errors.name = 'Field is required';
  }

  return errors;
};

const CreateFlowForm: React.FC<Props> = ({ onSubmit, onClose }) => {
  const classes = createFlowFormStyles();
  const initialValues: Flow = { code: '', name: '' };

  return (
    <div className={classes.wrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        {firmikBag => {
          return (
            <Form>
              <div className={classes.fieldWrapper}>
                <Field
                  name={FIELDS.CODE}
                  children={({ field }: FieldProps) => {
                    return <TextField {...field} label="Code" fullWidth />;
                  }}
                />
                <ErrorMessage
                  name={FIELDS.CODE}
                  render={msg => <FormErrorMessage message={msg} />}
                />
              </div>
              <div className={classes.fieldWrapper}>
                <Field
                  name={FIELDS.NAME}
                  children={({ field }: FieldProps) => {
                    return <TextField {...field} label="Name" fullWidth />;
                  }}
                />
                <ErrorMessage
                  name={FIELDS.NAME}
                  render={msg => <FormErrorMessage message={msg} />}
                />
              </div>
              <DialogActions>
                <Button color="secondary" type="button" onClick={onClose}>
                  CLOSE
                </Button>
                <Button color="primary" type="submit">
                  CREATE
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateFlowForm;
