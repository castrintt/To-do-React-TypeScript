import styles from "./EditList.module.css";
import React from "react";
import * as Interfaces from "../../../../interfaces/interfaces";
import * as Helpers from "../../../../helpers/helpersImport";

type Props = {
  editData: boolean;
  formData: Interfaces.FormBase;
  compareDataToEdit: Interfaces.ListMappingInterface;
  setEditData: (newState: boolean) => void;
  setFormData: (newState: Interfaces.FormBase) => void;
  setCompareDataToEdit: (newState: Interfaces.ListMappingInterface) => void;
};

const EditList = (props: Props) => {
  const handleCancelEdit = () => {
    props.setEditData(false);
    props.setCompareDataToEdit({
      title: "",
      difficulty: "",
    });
  };
  const [editTask, setEditTask] = React.useState<{
    title: string;
    difficulty: string;
  }>({
    title: "",
    difficulty: "",
  });

  const editObject = {
    editObject: props.formData,
    setFormData: props.setFormData,
    editTitle: props.compareDataToEdit.title,
    editDifficulty: props.compareDataToEdit.difficulty,
    titleEvent: editTask.title,
    difficultyEvent: editTask.difficulty,
  };

  return (
    <div className={styles.blackScreen__modal}>
      <div className={styles.container__modal}>
        <h2>Editar dados:</h2>
        <section className={styles.older__data}>
          <h2>Dados anteriores:</h2>
          <div>
            <p>Título:</p>
            <span> {props.compareDataToEdit.title}</span>
          </div>
          <div>
            <p>Dificuldade:</p>
            <span>
              <p>Dificuldade: {props.compareDataToEdit.difficulty}</p>
            </span>
          </div>
        </section>
        <form>
          <div>
            <label htmlFor="">Editar Título</label>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditTask({
                  ...editTask,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Editar Dificuldade</label>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditTask({
                  ...editTask,
                  difficulty: e.target.value,
                });
              }}
            />
          </div>
        </form>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              handleCancelEdit();
            }}
          >
            CANCELAR
          </button>
          <button
            onClick={() => {
              Helpers.editValues(editObject);
              props.setEditData(false);
            }}
          >
            SALVAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditList;
