import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }, index) => {
      return (
        <Field component={SurveyField} label={label} name={name} key={index} />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link className="red btn-flat white-text left" to="/surveys">
            CANCEL
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            NEXT
            <i className="material-icons right">add</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
