import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';

class StreamForm extends React.Component {
  // renderInput(formProps) {
  //   return <input
  //     onChange={formProps.input.onChange}
  //     value={formProps.input.value}
  //   />
  // }

  // renderError(meta) {
  renderError({ error, touched }) {
    if( touched && error ) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        { this.renderError(meta) }
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  onCancelClick = () => {
    history.push('/streams');
  }

  render() {
    console.log("StreamForm - render()", this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
        <button onClick={this.onCancelClick} className="ui button">Cancel</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title){
    errors.title = 'You should enter a title';
  }

  if(!formValues.description) {
    errors.description = 'You should enter a description';
  }

  return errors;
}



export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamForm);


