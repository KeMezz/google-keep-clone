import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, toDosState } from "../atoms";
import Memos from "./Memos";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IMemoForm {
  memo: string;
  title: string;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;
const Input = styled(motion.input)`
  z-index: 1;
  width: 100%;
  max-width: 600px;
  height: 46px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 0 20px;
  font-size: 16px;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
const OverlayForm = styled(motion.form)`
  position: fixed;
  z-index: 100;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
const TitleInput = styled.input`
  min-width: 600px;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 20px;
`;
const TextInput = styled.textarea`
  font-size: 18px;
  min-width: 600px;
  padding: 12px;
  border: none;
  outline: none;
  font-family: inherit;
`;
const FormBottom = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  align-self: flex-end;
  margin-top: 30px;
`;
const OverlayBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function Home() {
  const { register, handleSubmit, setValue } = useForm<IMemoForm>();
  const setToDos = useSetRecoilState(toDosState);
  const category = useRecoilValue(categoryState);
  const onMemoValid = ({ memo, title }: IMemoForm) => {
    if (!title) {
      const newToDo: IToDo = { text: memo, id: Date.now(), category: category };
      setToDos((oldToDos) => [newToDo, ...oldToDos]);
    } else {
      const newToDo: IToDo = {
        title: title,
        text: memo,
        id: Date.now(),
        category: category,
      };
      setToDos((oldToDos) => [newToDo, ...oldToDos]);
    }
    setInputClicked(false);
    setValue("title", "");
    setValue("memo", "");
  };
  const [inputClicked, setInputClicked] = useState(false);
  return (
    <Container>
      <AnimatePresence>
        <Form>
          <Input
            layoutId="form"
            onFocus={() => setInputClicked(true)}
            placeholder="메모를 추가하려면 클릭..."
          />
        </Form>
      </AnimatePresence>
      {inputClicked ? (
        <>
          <AnimatePresence>
            <OverlayForm onSubmit={handleSubmit(onMemoValid)} layoutId="form">
              <TitleInput
                {...register("title")}
                placeholder="제목"
                autoSave="off"
                autoComplete="off"
              />
              <TextInput
                autoFocus
                required
                placeholder="내용 작성..."
                autoSave="off"
                autoComplete="off"
                {...register("memo", {
                  required: "내용을 입력해주세요.",
                  minLength: 2,
                })}
              />
              <FormBottom>
                <OverlayBtn>제출</OverlayBtn>
              </FormBottom>
            </OverlayForm>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInputClicked(false)}
            />
          </AnimatePresence>
        </>
      ) : null}
      <Memos />
    </Container>
  );
}

export default Home;
