import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDosState } from "../atoms";

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
const MoreBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  font-size: 20px;
  left: 20px;
  bottom: 16px;
  cursor: pointer;
`;

const Menu = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Btn = styled(motion.button)`
  background-color: crimson;
  color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
`;

function Memo({ item, index }: MemoProps) {
  const [btnClicked, setBtnClicked] = useState(false);
  const [toDos, setToDos] = useRecoilState(toDosState);
  const onDeleteClicked = () => {
    const targetIndex = toDos.findIndex((toDo) => toDo.id === item.id);
    const copyToDos = [...toDos];
    copyToDos.splice(targetIndex, 1);
    setToDos(copyToDos);
  };
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
            {btnClicked ? (
              <AnimatePresence>
                <Menu
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Btn initial={{ y: 10 }} animate={{ y: 0 }}>
                    <i className="xi-pen" />
                  </Btn>
                  <Btn
                    onClick={onDeleteClicked}
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                  >
                    <i className="xi-trash" />
                  </Btn>
                </Menu>
              </AnimatePresence>
            ) : null}
            <MoreBtn
              onClick={() => setBtnClicked((current) => !current)}
              className="xi-ellipsis-h"
            />
          </List>
        )}
      </Draggable>
    </>
  );
}

export default React.memo(Memo);
