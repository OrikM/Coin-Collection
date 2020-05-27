import styled from "styled-components";

const InputField = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 109%;
  /* or 15px */

  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #000000;
`;
const SearchDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const InputS = styled.input`
  width: 374px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-size: 20px;
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
  justify-content: center;
  width: 120px;
  height: 48px;
  color: #ffffff;
  margin-left: 30px;
  border: none;
  background: #833ae0;
`;

export { InputField, SearchDiv, InputS, Button };
