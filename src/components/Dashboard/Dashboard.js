import React from 'react';
import { Link } from 'react-router-dom';
import WordContext from '../../contexts/WordContext';
import Table from '../Table/Table';
import './Dashboard.css';

class Dashboard extends React.Component {

  static contextType = WordContext;

  componentDidMount() {
    const { handleGetWords } = this.context;
    handleGetWords();
  }

  render() {
    const { words } = this.context;
    let total = 0;
    words.map((word) => total += word.correct_count);
    const result = [...words];
    result.sort((a, b) => (a.incorrect_count < b.incorrect_count) ? 1 : -1);

    return (
    <div className='dashboard'>
      {/* Add language as header and a start practicing button. Later make an api request to get the words from the list and list them out in their component. */}
      <div className='practice-container'>
        <h3>Total correct answers: {total}</h3>
        <button type="button"><Link to='/learn'>Start Practicing</Link></button>
      </div>
      <div className='word-container'>
        
        {(words.length)
          ? <div className='practice'>
              <h4>Words to practice: </h4>
              <ul>
                <li>{result[0].original}</li>
                <li>{result[1].original}</li>
                <li>{result[2].original}</li>
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