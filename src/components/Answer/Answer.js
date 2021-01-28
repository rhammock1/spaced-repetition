import React from 'react';

const Answer = function(props) {
  const { 
    guess,
    word,
    isCorrect,
    total,
    handleCloseAnswer,
    answer } = props;
  return (
    (isCorrect)
      ? (
        <div className='answer-container'>
          <div className='DisplayFeedback'>
            <h4>You were correct! :D</h4>
          </div>
          <div className='DisplayScore'>
            <p>Your total score is: {total}</p>
          </div>
          <button onClick={handleCloseAnswer} type='button'>Try another</button>
        </div>
        
      )
      : (
        <div className='answer-container'>
          <div className='DisplayFeedback'>
            <h2>Good try, but not quite right :(</h2>
            <p>The correct translation for {word} was {answer} and you chose {guess}!</p>
          </div>
          <div className='DisplayScore'>            
            <p>Your total score is: {total}</p>
          </div>
          <button onClick={handleCloseAnswer} type='button'>Try another word!</button>
        
        </div>
      )
    
    )
}

export default Answer;