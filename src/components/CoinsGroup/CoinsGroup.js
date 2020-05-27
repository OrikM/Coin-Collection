import React from "react";
import { Link } from "react-router-dom";
import { Img, CoinGroup } from "./CoisnsGroupStyle";

const fakeGroup = [
  {
    id: 1,
    name: "Bullion coins ",
    img: "https://i.postimg.cc/7LcZyQhd/Canadian-Beaver-1.png",
  },
  {
    id: 2,
    name: "Exclusive coins",
    img: "https://i.postimg.cc/bY2cMwQz/Looney-1.png",
  },
  {
    id: 3,
    name: "Commemorative coins",
    img: "https://i.postimg.cc/KvzcR2Tw/Jefferson-1.png",
  },
];

class CoinsGroup extends React.Component {
  render() {
    return (
      <div className="row">
        {fakeGroup.map((item) => {
          return (
            <CoinGroup className="col-4" key={item.id}>
              <h3>{item.name}</h3>
              <Link style={{ color: "#000" }} to={`/coins_list/${item.id}`}>
                Show all >
              </Link>
              <Img className="img-fluid" src={item.img} alt="coin" />
            </CoinGroup>
          );
        })}
      </div>
    );
  }
}

export default CoinsGroup;
