import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Login onClickLoginBtn={this.onClickButton} />
          ) : (
            <Logout onClickLogoutBtn={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
