import React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { get_coins } from "../../redux/actions/get_coins";
class CoinsList extends React.Component {
  componentDidMount = () => {
    if (this.props.id !== "search") {
      this.props.get_coins(this.props.id);
    }
  };

  render() {
    return (
      <div>
        <Header title="List of the coins" />
        <small>
          <Link to="/">Homepage </Link> &nbsp; — List of the coins
        </small>
        <Search />
        <div className="row">
          {this.props.coins.map((item) => {
            return (
              <div key={item.id} className="col-6 mb-3">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={item.obverse_img}
                      alt="coin"
                    />
                  </div>
                  <div className="col-9">
                    <Link to={`/coin_description/${item.id}`}>{item.name}</Link>
                    <p>{item.short_desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  coins: state.coins,
  id: ownProps.match.params.id,
});

export default connect(mapStateToProps, { get_coins })(CoinsList);
