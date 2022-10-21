import React from 'react';
import { useField , setFieldValue } from 'formik';
import TextField from '@mui/material/TextField';


const TextfieldWrapper = ({
  name, 
  ...otherProps
}) => {
  const [field, meta] = useField(name); 

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
    
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default TextfieldWrapper;