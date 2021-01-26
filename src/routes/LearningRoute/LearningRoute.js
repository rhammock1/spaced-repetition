import React, { Component } from 'react'
import WordContext from '../../contexts/WordContext'

class LearningRoute extends Component {
  
  static contextType = WordContext;

  render() {

    return (
      <section>
        <h2>Learning</h2>
      </section>
    );
  }
}

export default LearningRoute
