import styled from "styled-components";

const FilterClick = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 109%;
  /* or 15px */

  text-decoration-line: underline;

  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin-bottom: 30px;
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10vh;
`;

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Input = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  width: 155px;
  height: 48px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  margin-bottom: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 109%;
  /* or 15px */

  margin-top: 15px;
  color: #000000;
`;

const SecondBlock = styled.div`
  margin-left: -100px;
`;

export {
  FilterClick,
  FlexBox,
  SelectBlock,
  Input,
  InputBlock,
  Title,
  SecondBlock,
};
