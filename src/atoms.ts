import { atom, selector } from "recoil";

export interface IToDo {
  title?: string;
  text: string;
  id: number;
  category: string;
}

export const sidebarState = atom({
  key: "sidebarState",
  default: true,
});

export const toDosState = atom<IToDo[]>({
  key: "toDosState",
  default: [],
});

export const toDosSelector = selector({
  key: "toDosSelector",
  get: ({ get }) => {
    const toDos = get(toDosState);
    return [
      toDos.filter((item) => item.category === "메모"),
      toDos.filter((item) => item.category === "할일"),
    ];
  },
});

export const categoryState = atom({
  key: "categoryState",
  default: "메모",
});
