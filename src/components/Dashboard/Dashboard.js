import React from 'react';
import WordContext from '../../contexts/WordContext';
import Table from '../Table/Table';
import './Dashboard.css';

class Dashboard extends React.Component {

  static contextType = WordContext;

  render() {
    const { language, words } = this.context;

    return (
    <div className='dashboard'>
      {/* Add language as header and a start practicing button. Later make an api request to get the words from the list and list them out in their component. */}
      <div className='practice-container'>
        <h3>My language: {language.name}</h3>
        <button type="button">Start Practicing</button>
      </div>
      <div className='word-container'>
          <p>Words to practice: </p>
        {/* Gonna try and add a table instead of just doing a ul */}
        <Table />
      </div>
    </div>
  )
  }
}

export default Dashboard;