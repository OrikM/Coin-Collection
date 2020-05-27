import React from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CoinSBlock from "./CoinSBlock";
import { MainDiv, AddBlock, CircleAdd } from "./Apanel";
import { Route, Redirect, Link } from "react-router-dom";
import Edit from "./Edit";
import AddCoin from "./AddCoin";

export default class AdminPanel extends React.Component {
  render() {
    const authed = localStorage.getItem("auth");
    if (authed == 1) {
      return (
        <div>
          <Header className="head" title="Admin Panel" logout />

          <Route exact path="/admin_panel/">
            <Search admin className="search" />
            <CoinSBlock />
            <AddBlock className="add-block">
              <CircleAdd className="circle-add">+</CircleAdd>
              <Link
                style={{
                  alignSelf: "center",
                  color: "#000000",
                  marginLeft: "30px",
                  textDecoration: "underline",
                }}
                to="/admin_panel/add-coin/"
              >
                Add new coin
              </Link>
            </AddBlock>
          </Route>
          <Route path="/admin_panel/edit/:id" component={Edit} />
          <Route path="/admin_panel/add-coin/">
            <AddCoin />
          </Route>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
