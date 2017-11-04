import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurverFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurverFormReview
          onCancel={() => this.setState(state => ({ showFormReview: false }))}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() =>
          this.setState((state, props) => {
            return { showFormReview: true };
          })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
