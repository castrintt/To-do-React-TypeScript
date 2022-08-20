import React from "react";
import styles from "./List.module.css";
import { FormContext } from "../../../context/FormContext";
import * as Interfaces from "../../../interfaces/interfaces";
import * as Helpers from "../../../helpers/helpersImport";
import EditList from "./EditList/EditList";
interface Props {
  counter: number;
}
const List = (props: Props) => {
  const [editData, setEditData] = React.useState<boolean>(false);
  const { formData, setFormData } = React.useContext(FormContext);
  const [compareDataToEdit, setCompareDataToEdit] =
    React.useState<Interfaces.ListMappingInterface>({
      title: "",
      difficulty: "",
    });
  React.useEffect(() => {
    Helpers.filterValues(formData, setFormData);
  }, [props.counter]);
  return (
    <div className={styles.container__list}>
      <ul>
        {formData.list &&
          formData.list.map(
            (values: { title: string; difficulty: string }, index: number) => (
              <React.Fragment key={index}>
                <li>
                  <section>
                    <h2>{values.title}</h2>
                    <p>Dificuldade: {values.difficulty}</p>
                  </section>
                  <div>
                    <button
                      onClick={() => {
                        setCompareDataToEdit({
                          ...compareDataToEdit,
                          title: values.title,
                          difficulty: values.difficulty,
                        });
                        setEditData(true);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      onClick={() => {
                        Helpers.deleteTask(formData, values.title, setFormData);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </li>
                {editData && (
                  <EditList
                    formData={formData}
                    setFormData={setFormData}
                    setCompareDataToEdit={setCompareDataToEdit}
                    compareDataToEdit={compareDataToEdit}
                    editData={editData}
                    setEditData={setEditData}
                  />
                )}
              </React.Fragment>
            )
          )}
      </ul>
    </div>
  );
};

export default List;
