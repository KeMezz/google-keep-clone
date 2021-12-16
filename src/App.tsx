import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { sidebarState } from "./atoms";
import Header from "./Components/Header";
import Sidemenu from "./Components/Sidemenu";
import Router from "./Router";

const Body = styled.main`
  display: flex;
  margin-top: 74px;
`;

function App() {
  const sidebar = useRecoilValue(sidebarState);
  return (
    <>
      <Header />
      {sidebar ? <Sidemenu /> : null}
      <Body style={{ marginLeft: sidebar ? "300px" : 0 }}>
        <Router />
      </Body>
    </>
  );
}

export default App;
