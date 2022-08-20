import * as interfaces from "../../interfaces/interfaces";

export const deleteTask = (
  formulary: interfaces.FormBase,
  title: string,
  setter: (newState: interfaces.FormBase) => void
) => {
  const filterValue = formulary.list.filter(
    (values: interfaces.ListMappingInterface) => {
      if (values.title !== title) {
        return values;
      }
    }
  );
  return setter({
    ...formulary,
    list: filterValue,
  });
};
