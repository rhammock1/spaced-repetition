import React from 'react';

const Answer = function(props) {
  const { 
    guess,
    word,
    isCorrect,
    total,
    handleCloseAnswer,
    answer } = props;
    let message = (isCorrect) ? 'You were correct! :D' : 'Good try, but not quite right :('
  return (
    <div className='answer-container'>
      <div className='DisplayFeedback'>
        <h2>{message}</h2>
        <p>The correct translation for {word} was {answer} and you chose {guess}!</p>
      </div>
      <div className='DisplayScore'>
        <p>Your total score is: {total}</p>
      </div>
      <button onClick={handleCloseAnswer} type='button'>Try another word!</button>
    </div>
    )
}

export default Answer;