import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormikContext } from 'formik';
import { useField} from 'formik';


const RadioButtonWrapper = ({
    name, 
    options,
    ...otherProps
  })=> {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    
  
    const handleChange = evt => {
      const { value } = evt.target;
      setFieldValue(name, value);
    };
  
    const configRadioButton = {
      ...field,
      ...otherProps,
      //fullWidth: true,
      color: 'primary',
      onChange: handleChange,
    };


    if (meta && meta.touched && meta.error) {
        configRadioButton.error = true;
        configRadioButton.helperText = meta.error;
      }
    
      return (
        <RadioGroup row {...configRadioButton}>
          {options.map(option => (
          <FormControlLabel control={<Radio />} key={option.value} value={option.value} label={option.label} />
        ))}
        </RadioGroup>
      );
    };

export default RadioButtonWrapper;