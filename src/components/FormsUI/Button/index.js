import React from 'react';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();


  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    ...otherProps,
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <>
    <Button
      {...configButton}
    >
      {children}
    </Button>
    </>
  );
};

export default ButtonWrapper;