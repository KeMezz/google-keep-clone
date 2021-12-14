import styled from "styled-components";
import Header from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";
import Router from "./Router";

const Body = styled.main`
  display: flex;
  margin-top: 74px;
  margin-left: 300px;
`;

function App() {
  return (
    <>
      <Header />
      <Sidemenu />
      <Body>
        <Router />
      </Body>
    </>
  );
}

export default App;
