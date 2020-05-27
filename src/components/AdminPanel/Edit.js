import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { editCoin } from "../../redux/actions/coin";

const Edit = ({ coin, editCoin, id }) => (
  <Form
    {...{
      onSubmit: () => {
        editCoin(coin);
      },
      id,
      edit: true,
    }}
  />
);
const mapStateToProps = (state, ownProps) => ({
  coin: state.coin.coin,
  id: ownProps.match.params.id,
});

export default connect(mapStateToProps, { editCoin })(Edit);
