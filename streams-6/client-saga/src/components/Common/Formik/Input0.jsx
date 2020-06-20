import React from 'react';
import { useField } from 'formik';

const Input = ({ label, errors, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {errors && errors[props.name] ? (
        <div className="error">{errors[props.name]}</div>
      ) : null}
    </div>
  );
};

export default Input;
