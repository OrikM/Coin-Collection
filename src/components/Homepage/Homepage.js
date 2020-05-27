import React from "react";
import Search from "../Search/Search";
import CoinsGroup from "../CoinsGroup/CoinsGroup";
import Header from "../Header/Header";

class Homepage extends React.Component {
  state = {
    adminPanel: false,
  };

  filter = (filters) => {
    
  }

  render() {
    return (
      <div className="main-page">
        <Header title="Homepage" />
        <Search />
        <main>
          <CoinsGroup />
        </main>
      </div>
    );
  }
}

export default Homepage;
