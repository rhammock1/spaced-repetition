import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import WordContext from '../../contexts/WordContext';

class DashboardRoute extends Component {
  static contextType = WordContext;

  render() {
    const { language } = this.context;
    
    return (
      <section>
        <h2>My language: {language.name}</h2>
        <Dashboard />
      </section>
    );
  }
}

export default DashboardRoute
