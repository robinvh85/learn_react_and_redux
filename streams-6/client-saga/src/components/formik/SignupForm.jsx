import React from 'react';
import { Formik, Form, useField, FieldArray, Field } from 'formik';
import * as Yup from 'yup';
import Input from '../formItems/Input';
import Checkbox from '../formItems/Checkbox';
import Select from '../formItems/Select';
import Validator from '../formItems/Validator';
import Label from '../formItems/Label';
import i18n from '../../initialize/i18n';

// And now we can use these
const SignupForm = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    acceptedTerms: true, // added for our checkbox
    jobType: 'development', // added for our select
    friends: [{
      name: 'VH1',
      age: 14
    }]
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required')
      .myCustom('VH', 'Not VH'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    acceptedTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
      .oneOf(
        ['designer', 'development', 'product', 'other'],
        'Invalid Job Type'
      )
      .required('Required'),
    friends: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .min(4, 'too short')
            .required('Required'), // these constraints take precedence
          age: Yup.string()
            .min(20, 'cmon')
            .required('Required'), // these constraints take precedence
        })
      )
    });

    const handleSubmit = (values, { setSubmitting }) => {
      console.log("SUBMIT")
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    };

  const renderFriends = ({form, ...arrayHelpers}) => {
    return (
      <div>
        {form.values.friends.map((friend, index) => (
          <div key={index}>
            {console.log(index)}
            <Input
              name={`friends[${index}].name`}
              type="text"
            />
            <Input
              name={`friends[${index}].age`}
              type="text"
            />
            <Field name={`friends[${index}].name`} />
            <Field name={`friends.${index}.age`} />
            <button type="button" onClick={() => arrayHelpers.remove(index)}>
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => arrayHelpers.push({ name: '', age: '' })}
        >+</button>
      </div>
    )
  }

  return (
    <>
      <h1>{i18n.t("common.hello")}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <Select label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>
          <br/>
          <FieldArray
            name="friends"
            render={renderFriends}
          />
          <br/>
          <Field name="lastName">
            {({field, form, meta}) => (
              <div>
                {console.log(form)}
              <label>{form.values.firstName} {form.values.lastName}</label>
              </div>
            )}
          </Field>
          <br/>
          <Label name="lastName" />
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
