import React from "react";
import styles from "./Form.module.css";
import { FormContext } from "../../../context/FormContext";
import * as Helpers from "../../../helpers/helpersImport";
interface Props {
  counter: number;
  setCounter: (newState: number) => void;
}
const Form = (props: Props) => {
  const { formData, setFormData } = React.useContext(FormContext);
  const [blockedButton, setBlockedButton] = React.useState<boolean>(false);
  const repeatObject = {
    list: formData.list,
    titleForm: formData.title,
    setBlock: setBlockedButton,
  };
  const voidValuesObject = {
    title: formData.title,
    difficulty: formData.difficulty,
    block: setBlockedButton,
  };
  React.useEffect(() => {
    Helpers.checkVoidValues(voidValuesObject);
  });
  React.useEffect(() => {
    Helpers.checkRepeatedValues(repeatObject);
  });

  return (
    <form className={styles.form__container}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, difficulty: e.target.value })
          }
        />
      </div>
      <input
        className={blockedButton ? styles.blocked__button : ""}
        type="submit"
        disabled={blockedButton}
        onClick={(e: React.MouseEvent<HTMLHeadElement>) => {
          Helpers.submitForm(e, formData);
          props.setCounter(props.counter + 1);
        }}
      />
    </form>
  );
};

export default Form;
