import { TodoInterface } from "../todoInterface/todoInterface";

export interface RepeatedValuesInterface {
  list: TodoInterface;
  titleForm: string;
  setBlock: (newState: boolean) => void;
}
