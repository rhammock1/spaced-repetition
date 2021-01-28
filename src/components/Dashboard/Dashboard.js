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
    const { result } = this.props;
    return (
    <div className='dashboard'>
      {/* Add language as header and a start practicing button. Later make an api request to get the words from the list and list them out in their component. */}
      <div className='practice-container'>
        <button type="button"><Link to='/learn'>Start practicing</Link></button>
      </div>
      <div className='word-container'>
        
        {(words.length)
          ? <div className='practice'>
              <h3>Words to practice: </h3>
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