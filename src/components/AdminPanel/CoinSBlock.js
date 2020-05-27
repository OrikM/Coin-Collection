import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCoin } from "../../redux/actions/coin";
import { getAllCoins } from "../../redux/actions/get_coins";
import {
  Img,
  CoinsRow,
  CoinName,
  ShortDesc,
  ButtonBlock,
  Button,
  LinkButton,
} from "./Apanel";
class CoinSBlock extends React.Component {
  componentDidMount = () => {
    this.props.getAllCoins();
  };

  render() {
    const { coins } = this.props;
    return (
      <div className="coin-block">
        {coins.map((item) => {
          return (
            <CoinsRow key={item.id} className="row">
              <Img src={item.obverse_img} />
              <div>
                <CoinName>{item.name}</CoinName>
                <ShortDesc className="textarea">{item.short_desc}</ShortDesc>
              </div>
              <ButtonBlock className="button-block">
                <Link
                  className="edit_button"
                  to={`/admin_panel/edit/${item.id}`}
                >
                  Edit
                </Link>
                <Button onClick={() => this.props.deleteCoin(item.id)}>
                  Delete
                </Button>
              </ButtonBlock>
            </CoinsRow>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  coins: state.coins,
});

export default connect(mapStateToProps, { getAllCoins, deleteCoin })(
  CoinSBlock
);
