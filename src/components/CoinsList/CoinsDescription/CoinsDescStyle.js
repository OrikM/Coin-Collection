import styled from "styled-components";

const CoinsImg = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 20px;
`;

const Table = styled.table`
  height: 160px;
  margin: 49px auto;
  width: 100%;
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 24px;
`;

const Td = styled.td`
  width: 50%;
  font-size: 11px;
  border-collapse: collapse;
  border-right: 1px solid #b1acac;
  border-left: none;
`;

const PageText = styled.div`
`;

const TextBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(196, 196, 196, 0.5);
  max-width: 500px;
  padding: 43px;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export { MainContainer, Table, TextBox, PageText, CoinsImg, Image, Td };
