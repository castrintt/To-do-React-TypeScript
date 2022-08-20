import * as interfaces from "../../interfaces/interfaces";

export const filterNullableValues = (
  listValues: interfaces.FormBase,
  setterFunction: (newState: interfaces.FormBase) => void
) => {
  setterFunction({
    ...listValues,
    list: listValues.list.filter((values: interfaces.ListMappingInterface) => {
      return values.title !== "" && values.difficulty !== "";
    }),
  });
};
