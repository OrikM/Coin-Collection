import styled from "styled-components";

const PageTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 59px;
  display: flex;
  align-items: center;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 20px;
`;

const Apanel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 109%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline;

  color: #000000;
`;
export { PageTitle, Apanel, Head };
