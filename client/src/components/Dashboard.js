import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SurveyNew from './surveys/SurveyNew';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashbord
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large red" to="/surveys/new">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
