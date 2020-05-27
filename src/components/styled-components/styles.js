import styled, { css } from "styled-components";

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const InputName = styled.span`
  transition: font-size 0.2s linear;
  font-weight: 500;
  font-size: 0.87em;
  color: #000000;
`;

export const Input = styled.input`
  height: 3rem;
  border: 1px solid #000000;
  padding: 0.3em 0.6em;
  outline: none;
  font-size: 1em;
  width: 100% !important;
`;

export const Button = styled.button`
  width: 8.57em;
  height: 3.43em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: font-size 0.2s linear;
  background: #833ae0;
  font-size: 0.875rem;
  line-height: 1.14em;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.negative &&
    css`
      background: #e5e5e5;
      color: black;
    `}
`;

export const Buttons = styled.div`
  display: flex;
  width: 16.875rem;
  justify-content: space-between;
  a {
    text-decoration: none;
    height: fit-content;
  }
`;

export const Description = styled.textarea`
  font-size: 1.125rem;
  height: 9.7em;
  border: 1px solid #000000;
  resize: none;
  outline: none;
  padding: 0.28em 0.55em;
  transition: all 0.2s linear;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 2px;
`;

export const DescriptionBlock = styled.div`
  height: 9.9rem;
  display: flex;
  transition: all 0.2s linear;
  flex-direction: column;
  justify-content: space-between;
`;
