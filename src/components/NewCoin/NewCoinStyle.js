import styled from "styled-components";

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  height: 80vh;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6 1fr);
`;
const TextAreaBlock = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr;
`;

const Textarea = styled.textarea`
  border: 1px solid #000000;
  box-sizing: border-box;
  resize: none;
  height: 156px;
  margin-top: -12px;  
`;

const InputWrapperLast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 26px; 
  margin-top: 20px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SaveButton = styled.button`
  color: #ffffff;
  background: #833ae0;
`;

const CancelButton = styled.button`
  background: #e1e1e1;
  color: #000000;
`;
const TexBlock = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr 0.5fr;
`;

export {
  Wrapper,
  InputWrapper,
  TextAreaBlock,
  Textarea,
  InputWrapperLast,
  ButtonDiv,
  SaveButton,
  CancelButton,
  TexBlock,
};
