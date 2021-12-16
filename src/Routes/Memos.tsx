import { motion } from "framer-motion";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, IToDo, toDosState } from "../atoms";
import Memo from "./Memo";

const Lists = styled(motion.div)`
  padding: 0 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Memos() {
  const [toDos, setToDos] = useRecoilState(toDosState);
  const category = useRecoilValue(categoryState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return null;
    const copyBoard = [...toDos];
    const targetToDo: IToDo = copyBoard[source.index];
    copyBoard.splice(source.index, 1);
    copyBoard.splice(destination?.index, 0, targetToDo);
    setToDos(() => copyBoard);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={category}>
        {(magic) => (
          <Lists ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((item, index) => (
              <Memo key={item.id} item={item} index={index} />
            ))}
            {magic.placeholder}
          </Lists>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Memos;
