import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'
import earth from '../../images/cartoon-earth.png';

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    const date = new Date();
    const hour = date.getHours();
    let greeting;
    if (hour < 12) {
      greeting = 'Good Morning, '
    } else if (12 < hour < 18) {
      greeting = 'Good Afternoon, '
    } else {
      greeting = 'Good Evening, '
    }
    return (
      <div>
        <span>
          {greeting}{this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login'>Login</Link>
        {' '}
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1>
          <img className="logo" src={earth} alt="earth" />
          <Link to='/'>
            LangGo
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
