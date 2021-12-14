import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Form = styled.form`
  padding: 30px;
`;
const Input = styled.input`
  width: 600px;
  height: 46px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 0 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const Lists = styled.div`
  display: grid;
`;
const List = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: ${(props) => props.theme.bgColor.subBg};
`;

function Home() {
  const onDragEnd = () => {};
  return (
    <Container>
      <Form>
        <Input placeholder="메모 작성..." />
      </Form>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="allLists">
          {(magic) => (
            <Lists ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="list" index={0}>
                {(magic) => (
                  <List
                    ref={magic.innerRef}
                    {...magic.dragHandleProps}
                    {...magic.draggableProps}
                  >
                    hello!
                  </List>
                )}
              </Draggable>
            </Lists>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default Home;
