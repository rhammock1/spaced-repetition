import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Answer from '../../components/Answer/Answer';
import LearningCard from '../../components/LearningCard/LearningCard';
import WordContext from '../../contexts/WordContext'
import AuthApiService from '../../services/auth-api-service';

class LearningRoute extends Component {
  
  static contextType = WordContext;

  state = {
    isCorrect: null,
    error: null,
    nextWord: '',
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    answer: '',
    guess: '',
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
    this.setState({ guess });
    guess = {
      guess: guess
    };
    event.target.guess.value = '';
    AuthApiService.postGuess(guess)
      .then((resJson) => {
        
        this.setState({
          isCorrect: resJson.isCorrect,
          answer: resJson.answer,
          nextWord: resJson.nextWord,
          wordCorrectCount: resJson.wordCorrectCount,
          wordIncorrectCount: resJson.wordIncorrectCount,
          totalScore: resJson.totalScore,
        })
        
      })
      .catch((err) => this.setState({ err }))
  }

  handleCloseAnswer = () => {
    this.setState({ isCorrect: null });
  }

  render() {
    const {
      nextWord,
      isCorrect,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      answer,
      guess, } = this.state;

    return (
      <section>
        {(isCorrect === null)
          ? <>
              <div className='page-heading'>
                <h2>Translate the word:</h2><span className='underline'>{nextWord}</span>
                <p>Your total score is: {totalScore}</p>
              </div>
              <LearningCard handleGuess={this.handlePostGuess} word={nextWord} />
              <div className='score-container'>
                <p>You have answered this word incorrectly {wordIncorrectCount} times.<br />
                  You have answered this word correctly {wordCorrectCount} times.</p>
              </div>
              <button type='button'><Link to='/'>Go back to Dashboard</Link></button>
            </>
          : (isCorrect)
              ? <Answer word={nextWord} guess={guess} answer={answer} handleCloseAnswer={this.handleCloseAnswer} total={totalScore} incorrect={wordIncorrectCount} correct={wordCorrectCount} isCorrect={true} />
              : (isCorrect === false)
                  ? <Answer word={nextWord} guess={guess} answer={answer} handleCloseAnswer={this.handleCloseAnswer} total={totalScore} incorrect={wordIncorrectCount} correct={wordCorrectCount} isCorrect={false} />
                  : null
        }
      </section>
    );
  }
}

export default LearningRoute
