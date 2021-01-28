import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import WordContext from '../../contexts/WordContext';

class DashboardRoute extends Component {
  static contextType = WordContext;

  render() {
    const { language, words } = this.context;
    let total = 0;
    words.map((word) => total += word.correct_count);
    const result = [...words];
    result.sort((a, b) => (a.incorrect_count < b.incorrect_count) ? 1 : -1);
    
    return (
      <section>
        <h2>My language: {language.name}</h2>
        <p>Total correct answers: {total}</p>
        <Dashboard result={result} />
      </section>
    );
  }
}

export default DashboardRoute
