import React from 'react'

const WordContext = React.createContext({
  language: {},
  words: [],
  handleGetWords: () => {},
})

export default WordContext;