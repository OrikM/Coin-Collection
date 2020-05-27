import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MainContainer,
  Table,
  TextBox,
  PageText,
  CoinsImg,
  Image,
  Td,
} from "./CoinsDescStyle";

class CoinsDescription extends React.Component {
  state = {
    coin: {},
  };

  getCoin = () => {
    fetch("/coin/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ coin: data });
      });
  };

  componentDidMount = () => {
    this.getCoin();
  };

  render() {
    let item = this.state.coin;
    console.log(this.state.coin);
    return (
      <div>
        <MainContainer className="container">
          <CoinsImg className="avers-revers-coin">
            <Image className="img" src={item.reverse_img} />
            <Image className="img" src={item.obverse_img} />
          </CoinsImg>
          <TextBox className="container">
            <PageText className="text-of-page">
              <h2>{item.name}</h2>
              <p>{item.short_desc}</p>
              <p>{item.long_desc}</p>
            </PageText>
            <div>
              <Table>
                <tbody className="tbody">
                  <tr>
                    <Td>Issuing Country</Td>
                    <Td>{item.country}</Td>
                  </tr>
                  <tr>
                    <Td>Composition</Td>
                    <Td>{item.metal}</Td>
                  </tr>
                  <tr>
                    <Td>Quality</Td>
                    <Td>{item.quality}</Td>
                  </tr>
                  <tr>
                    <Td>Denomination</Td>
                    <Td>{item.face_value}</Td>
                  </tr>
                  <tr>
                    <Td>Year</Td>
                    <Td>{item.year_issue}</Td>
                  </tr>
                  <tr>
                    <Td>Weight</Td>
                    <Td>{item.weight}</Td>
                  </tr>
                  <tr>
                    <Td>Price</Td>
                    <Td>{item.price}</Td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Link className="link_to_main" to={`/coins_list/${item.typeId}`}>
              Back to List
            </Link>
          </TextBox>
        </MainContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coin: state.coin,
});

export default connect(mapStateToProps)(CoinsDescription);
