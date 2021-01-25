import React from 'react';
import WordContext from '../../contexts/WordContext';
import Table from '../Table/Table';

class Dashboard extends React.Component {

  static contextType = WordContext;

  render() {
    const { language, words } = this.context;

    return (
    <div className='dashboard'>
      {/* Add language as header and a start practicing button. Later make an api request to get the words from the list and list them out in their component. */}
      <h3>My language: {language.name}</h3>
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