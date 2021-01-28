import React from 'react';
import './LearningCard.css';

const LearningCard = function(props) {
  const { handleGuess } = props
  return (
    <div className='word-container'>
      <form onSubmit={handleGuess}className='learn-form'>
        <label htmlFor='learn-guess-input'>What's the translation for this word?</label><input type='text' id='learn-guess-input' name='guess' required />
        <button type='submit'>Submit your answer</button>
      </form>
    </div>
    )
}

export default LearningCard;