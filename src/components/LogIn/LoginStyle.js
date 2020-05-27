import styled from "styled-components";

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 109%;
  /* or 15px */
  width: 24vw;

  color: #000000;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22vw;
  margin: 0px auto;
  padding-top: 200px;
`;
const LogBlock = styled.div`
  margin-bottom: 20px;
`;
const InputLog = styled.input`
  width: 374px;
  height: 48px;

  border: 1px solid #000000;
  box-sizing: border-box;
`;

const SignButton = styled.button`
  background: #833ae0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  color: #ffffff;
  width: 120px;
  height: 48px;
  cursor: pointer;
  border: none;
`;

export { Label, Form, InputLog, SignButton, LogBlock };
