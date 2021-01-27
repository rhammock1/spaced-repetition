import React from 'react';

const Answer = function(props) {
  const { isCorrect,
  incorrect,
  correct,
  total,
  handleCloseAnswer,
  answer } = props;
  return (
    (isCorrect)
      ? (
        <div className='answer-container'>
          <h4>Correct! That's the right answer!</h4>
          <div className='score-container'>
            <p>Number of times wrong: {incorrect} <br />
            Number of times correct: {correct}</p>
            <p>Your total score is: {total} </p>
          </div>
          <button onClick={handleCloseAnswer} type='button'>Try another</button>
        </div>
      )
      : (
        <div className='answer-container'>
          <h4>Not quite!</h4>
          <p>The right answer is {answer}</p>
          <div className='score-container'>
            <p>Number of times wrong: {incorrect} <br />
            Number of times correct: {correct}</p>
            <p>Your total score is: {total} </p>
          </div>
          <button onClick={handleCloseAnswer} type='button'>Try another</button>
        </div>
      )
    
    )
}

export default Answer;