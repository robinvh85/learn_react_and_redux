import React from 'react';
import { useField } from 'formik';

const Label = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helper] = useField(props);
  console.log(helper)
  // {console.log(props)}
  return (
    <>

      <label>{field.value}</label>
    </>
  );
};

export default Label;
