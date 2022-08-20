import { createContext, ReactNode, useState } from "react";
import { Form } from "../interfaces/formState";
type FormContext = {
  children: ReactNode;
};
const INITIAL_VALUE: Form = {
  formData: {
    title: "",
    difficulty: "",
    list: [
      {
        title: "",
        difficulty: "",
      },
    ],
  },
  setFormData: () => {},
};
export const FormContext = createContext<Form>(INITIAL_VALUE);
export const FormContextProvider = ({ children }: FormContext) => {
  const [formData, setFormData] = useState(INITIAL_VALUE.formData);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
