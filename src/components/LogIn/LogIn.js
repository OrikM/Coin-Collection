import React from "react";
import { InputLog, Form, Label, SignButton, LogBlock } from "./LoginStyle";
import { Redirect } from "react-router-dom";
export default class LogIn extends React.Component {
  state = {
    pass: "",
    login: "",
    error: false,
    logined: false,
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    if (
      this.state.login == "omehraliyev@gmail.com" ||
      this.state.pass == "orxan123"
    ) {
      localStorage.setItem("auth", 1);
      this.setState({ logined: true });
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    console.log(this.props);
    let { login, pass } = this.state;

    if (this.state.logined) {
      return <Redirect to="/admin_panel" />;
    }
    return (
      <Form>
        <LogBlock className="row">
          <Label htmlFor="login">Login</Label>
          <InputLog
            type="text"
            id="login"
            name="login"
            onChange={this.change}
            value={login}
          />
        </LogBlock>
        <div className="row">
          <Label htmlFor="pass">Password</Label>
          <InputLog
            type="password"
            id="pass"
            name="pass"
            onChange={this.change}
            value={pass}
          />
        </div>
        {this.state.error && (
          <div>
            <span className="text-danger">Wrong Login or Password </span>
          </div>
        )}
        <SignButton type="submit" onClick={this.login}>
          Sign In
        </SignButton>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  pass: state.auth.pass,
});
