import React from 'react';

const LearningCard = function(props) {
  const { word, handleGuess } = props
  return (
    <div className='word-container'>
      <h3>What does <span className='underline'>{word}</span> translate to?</h3>
      <form onSubmit={handleGuess}className='learn-form'>
        <label htmlFor='guess'><span className='underline'>{word}</span> means <input type='text' id='guess' name='guess' /> in English</label>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
}

export default LearningCard;