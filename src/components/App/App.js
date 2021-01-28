import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import './App.css'
import AuthApiService from '../../services/auth-api-service';
import WordContext from '../../contexts/WordContext';

export default class App extends Component {
  state = { 
    hasError: false,
    language: {},
    words: [],
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  handleGetWords = () => {
    AuthApiService.getLanguageWords()
      .then((resJson) => {
        this.setState({
          language: resJson.language,
          words: resJson.words,
        })
      })
      .catch((err) => {
        this.setState({ err });
      })
  }

  render() {
    const { hasError, language, words } = this.state
    const value = {
      language, words, handleGetWords: this.handleGetWords,
    }
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <WordContext.Provider value={value}>
            <Switch>
              <PrivateRoute
                exact
                path={'/'}
                component={DashboardRoute}
              />
              <PrivateRoute
                path={'/learn'}
                component={LearningRoute}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={LoginRoute}
              />
              <Route
                component={NotFoundRoute}
              />
          </Switch>
          </WordContext.Provider>
        </main>
      </div>
    );
  }
}
