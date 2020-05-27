import styled from "styled-components";
import { Link } from "react-router-dom";
const MainDiv = styled.div`
  display: grid;
  grid-template-rows: 0.01fr 0.1fr 2fr;
  grid-row-gap: 30px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const CoinsRow = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 1fr;
  grid-column-gap: 30px;
  justify-self: start;
  margin-top: 20px;
  margin-left: 0px;
  margin-right: 10px;
`;

const AddBlock = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin-left: 0;
`;
const CircleAdd = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid black;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const CoinName = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #833ae0;
`;
const ShortDesc = styled.p`
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 125.5%;
  /* or 15px */
  width: 224px;
  color: #000000;
  margin: 0;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  width: 285px;
`;

const Button = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  color: #000000;
`;

export {
  MainDiv,
  Img,
  CoinsRow,
  AddBlock,
  CircleAdd,
  CoinName,
  ShortDesc,
  ButtonBlock,
  Button,
};
