import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Answer from '../../components/Answer/Answer';
import LearningCard from '../../components/LearningCard/LearningCard';
import WordContext from '../../contexts/WordContext'
import AuthApiService from '../../services/auth-api-service';

class LearningRoute extends Component {
  
  static contextType = WordContext;

  state = {
    seen: false,
    isCorrect: null,
    error: null,
    nextWord: '',
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    answer: '',
  }

  componentDidMount() {
    this.handleGetHead();
  }

  handleGetHead = () => {
    AuthApiService.getHead()
      .then((resJson) => {
        console.log(resJson);
        this.setState({ 
          nextWord: resJson.nextWord,
          totalScore: resJson.totalScore,
          wordCorrectCount: resJson.wordCorrectCount,
          wordIncorrectCount: resJson.wordIncorrectCount,
         })
      })
      .catch((err) => this.setState({ err }))
  }

  handlePostGuess = (event) => {
    event.preventDefault();
    let guess = event.target.guess.value;
    guess = {
      guess: guess
    };
    event.target.guess.value = '';
    AuthApiService.postGuess(guess)
      .then((resJson) => {
        
        this.setState({
          isCorrect: resJson.isCorrect,
          answer: resJson.answer,

        })
        
      })
      .then(() => {
        this.handleGetHead();
      })
      .catch((err) => this.setState({ err }))
  }

  handleSeen = () => {
    this.setState({ seen: true });
  }

  handleCloseAnswer = () => {
    this.setState({ isCorrect: null });
  }

  render() {
    const {
      seen,
      nextWord,
      isCorrect,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      answer, } = this.state;

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
        
        <LearningCard handleGuess={this.handlePostGuess} word={nextWord} />
        <div className='score-container'>
          <p>Your total score is: {totalScore} </p>
        </div>
        <button type='button'><Link to='/'>Go back to Dashboard</Link></button>
        {/* AnswerResponse component */}
        {(isCorrect)
          ? <Answer answer={answer} handleCloseAnswer={this.handleCloseAnswer} total={totalScore} incorrect={wordIncorrectCount} correct={wordCorrectCount} isCorrect={true} />
          : null
        }
        {(isCorrect === false)
          ? <Answer answer={answer} handleCloseAnswer={this.handleCloseAnswer} total={totalScore} incorrect={wordIncorrectCount} correct={wordCorrectCount} isCorrect={false} />
          : null
        }
      </section>
    );
  }
}

export default LearningRoute
