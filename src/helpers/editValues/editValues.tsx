import * as interfaces from "../../interfaces/interfaces";
type Mapping = interfaces.ListMappingInterface;

export const editValuesFunction = (object: interfaces.EditObjectInterface) => {
  const editList: Mapping[] = object.editObject.list.map((values: Mapping) => {
    if (values.title === object.editTitle) {
      return {
        ...values,
        title: object.titleEvent,
        difficulty: object.difficultyEvent,
      };
    }
    return values;
  });
  object.setFormData({
    ...object.editObject,
    list: editList,
  });
  return object.editObject;
};
