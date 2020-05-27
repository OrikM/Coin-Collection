import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import CoinsList from "./components/CoinsList/CoinsList";
import CoinsDescription from "./components/CoinsList/CoinsDescription/CoinsDescription";
import LogIn from "./components/LogIn/LogIn";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import NewCoin from "./components/NewCoin/NewCoin";

class App extends React.Component {
  state = {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
  };

  onLogin = (token, username) => {
    this.setState({ token, username });
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/coins_list/:id" component={CoinsList} />
          <Route path="/coin_description/:id" component={CoinsDescription} />
          <Route path="/login" component={LogIn} />
          <Route path="/admin_panel/" component={AdminPanel} />
          <Route path="/new_coin" exact component={NewCoin} />
        </div>
      </Router>
    );
  }
}

export default App;
