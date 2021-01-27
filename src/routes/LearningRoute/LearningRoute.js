import React, { Component } from 'react'
import WordContext from '../../contexts/WordContext'
import AuthApiService from '../../services/auth-api-service';

class LearningRoute extends Component {
  
  static contextType = WordContext;

  state = {
    seen: false,
    isCorrect: null,
    error: null,
    head: {},
  }

  componentDidMount() {
    this.handleGetHead();
  }

  handleGetHead = () => {
    AuthApiService.getHead()
      .then((resJson) => {
        this.setState({ head: resJson })
      })
  }

  handleSeen = () => {
    this.setState({ seen: true });
  }

  render() {
    const { seen } = this.state;
    return (
      <section>
        <h2>Learning</h2>
        {(!seen)
          ? <div className='popup'>
              <p>Are you ready?</p>
              <button onClick={this.handleSeen} type='button'>Start</button>
            </div>
          : null 
        }
        {/* Learning card component */}
        {/* AnswerResponse component */}
      </section>
    );
  }
}

export default LearningRoute
