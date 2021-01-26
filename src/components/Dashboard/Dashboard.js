import React from 'react';
import WordContext from '../../contexts/WordContext';
import Table from '../Table/Table';
import './Dashboard.css';

class Dashboard extends React.Component {

  static contextType = WordContext;

  render() {
    const { words } = this.context;
    let total = 0;
    words.map((word) => total += word.correct_count);

    return (
    <div className='dashboard'>
      {/* Add language as header and a start practicing button. Later make an api request to get the words from the list and list them out in their component. */}
      <div className='practice-container'>
        <h3>Total correct answers: {total}</h3>
        <button type="button">Start Practicing</button>
      </div>
      <div className='word-container'>
        
        {(words.length)
          ? <div className='practice'>
              <h4>Words to practice: </h4>
              <ul>
                <li>{words[0].original}</li>
                <li>{words[1].original}</li>
                <li>{words[2].original}</li>
              </ul>
            </div>
          : null
        }
        <Table />
      </div>
    </div>
  )
  }
}

export default Dashboard;