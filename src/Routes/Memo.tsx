import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { IToDo } from "../atoms";

interface MemoProps {
  item: IToDo;
  index: number;
}

const List = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.accentColor};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  line-height: 1.5;
  overflow: hidden;
`;
const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  padding: 20px;
  padding-bottom: 0;
`;
const Text = styled.h3`
  font-size: 18px;
  padding: 20px;
  white-space: pre;
`;
const Cat = styled.p`
  margin: 12px;
  margin-top: 10px;
  border-radius: 16px;
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.8);
  width: fit-content;
  font-size: 14px;
  align-self: flex-end;
`;
const DelBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  font-size: 20px;
  left: 20px;
  bottom: 16px;
  cursor: pointer;
`;

function Memo({ item, index }: MemoProps) {
  return (
    <>
      <Draggable draggableId={item.id + ""} index={index}>
        {(magic) => (
          <List
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {item.title ? <Title>{item.title}</Title> : null}
            <Text>{item.text}</Text>
            <Cat>{item.category}</Cat>
            <DelBtn className="xi-ellipsis-h"></DelBtn>
          </List>
        )}
      </Draggable>
    </>
  );
}

export default React.memo(Memo);
