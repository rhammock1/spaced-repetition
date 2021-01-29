import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import UserContext from '../../contexts/UserContext'
import AuthApiService from '../../services/auth-api-service';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  state = {
    error: null
  }

  static contextType = UserContext;

  handleRegistrationSuccess = (username, password) => {
    const { history } = this.props;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        this.context.processLogin(res.authToken)
      })
      .then(() => history.push('/'))
      .catch((err) => this.setState({ err }))
  }

  render() {
    return (
      <section>
        <p>
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
