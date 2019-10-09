import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // I have one prop handleLogin which is a function called login located in App.js

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.setState({
                username: event.target.value
              })}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={event => this.setState({
                password: event.target.value
              })}
               />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
