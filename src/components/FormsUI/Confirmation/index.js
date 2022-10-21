import  React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { deleteUser } from "/home/trootech/Documents/react/users/src/redux/userSlice";
import { useDispatch } from "react-redux";


export default function ConfirmationDialogRaw(props) {
    const { onClose, open,value, ...other } = props;
    const dispatch = useDispatch();
  
    const handleCancel = () => {
      onClose();
    };
  
    const handleOk = () => {
      onClose(value);
      dispatch(deleteUser({ id: value}));
    };

  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
        {...other}
      >
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent dividers>
        Are you sure want to delete?
        </DialogContent>
        <DialogActions>            
          <Button autoFocus onClick={handleCancel}>
            No
          </Button> 
          <Button onClick={handleOk}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
  