import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
  width: 300px;
  position: fixed;
  left: 0;
`;
const Lists = styled.ul`
  display: flex;
  flex-direction: column;
`;
const List = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 14px;
  padding-left: 26px;
  border-radius: 0 26px 26px 0;
  color: ${(props) => props.theme.textColor.activeText};
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  i {
    font-size: 22px;
  }
  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

function Sidemenu() {
  return (
    <Container>
      <Lists>
        <List style={{ backgroundColor: "#FEEFC3" }}>
          <i className="xi-lightbulb-o"></i>
          <span>메모</span>
        </List>
        <List
          whileHover={{ backgroundColor: "rgba(241, 243, 244, 1)" }}
          transition={{ duration: 0.2 }}
        >
          <i className="xi-star-o"></i>
          <span>중요</span>
        </List>
        <List
          whileHover={{ backgroundColor: "rgba(241, 243, 244, 1)" }}
          transition={{ duration: 0.2 }}
        >
          <i className="xi-trash-o"></i>
          <span>휴지통</span>
        </List>
      </Lists>
    </Container>
  );
}

export default Sidemenu;
