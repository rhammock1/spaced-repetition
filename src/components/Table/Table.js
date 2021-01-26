import React from 'react';
import WordContext from '../../contexts/WordContext';
import './Table.css';

class Table extends React.Component {

  static contextType = WordContext;

  renderTableData() {
    const { words } = this.context;
    return words.map((word) => {
      const {
        id,
        original,
        translation,
        correct_count,
        incorrect_count
      } = word;
      
      return (
        <tr key={id}>
          <td>{original}</td>
          <td>{translation}</td>
          <td>{correct_count}</td>
          <td>{incorrect_count}</td>
        </tr>)
    })
    
  }

  renderTableHeader() {
    const wordKeys = ['original', 'english', 'correct count', 'incorrect count'];
    let header = wordKeys;
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <table id='students'>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }
}

export default Table;