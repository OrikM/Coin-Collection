import React from "react";
import { Apanel, PageTitle, Head } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("auth");

    this.props.history.push("/");
  };
  render() {
    return (
      <Head className="container py-3 mt-2 mb-0">
        <div>
          <PageTitle>{this.props.title}</PageTitle>
        </div>
        <Apanel>
          {!this.props.logout ? (
            <Link style={{ color: "#000000" }} to="/admin_panel">
              Admin Panel
            </Link>
          ) : (
            <a style={{ color: "#000000" }} onClick={this.logout} href="/">
              Log out
            </a>
          )}
        </Apanel>
      </Head>
    );
  }
}

export default withRouter(Header);
