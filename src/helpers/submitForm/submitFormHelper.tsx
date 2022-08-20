import { MouseEvent } from "react";
import * as interfaces from "../../interfaces/interfaces";

export const handleSubmit = (
  e: MouseEvent<HTMLHeadElement>,
  form: interfaces.FormBase
) => {
  e.preventDefault();
  form.list.push({
    title: form.title,
    difficulty: form.difficulty,
  });
  return form.list;
};
