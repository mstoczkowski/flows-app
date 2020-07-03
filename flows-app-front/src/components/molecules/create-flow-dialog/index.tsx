import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CreateFlowForm from '../create-flow-form';
import { Flow } from '../../../@types/flow';

interface Props {
  isOpen: boolean;
  onSubmit: (values: Flow) => void;
  onClose: () => void;
}

const CreateFlowDialog: React.FC<Props> = ({ isOpen, onSubmit, onClose }) => (
  <Dialog open={isOpen}>
    <DialogTitle>Create new flow</DialogTitle>
    <DialogContent>
      <CreateFlowForm onSubmit={onSubmit} onClose={onClose} />
    </DialogContent>
  </Dialog>
);

export default CreateFlowDialog;
