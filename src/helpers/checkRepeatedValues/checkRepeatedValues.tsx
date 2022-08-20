import * as interfaces from "../../interfaces/interfaces";

export const repeatedValues = (request: interfaces.RepeatedValuesInterface) => {
  const listValues: string[] = [];
  request.list.map((value: interfaces.ListMappingInterface) => {
    listValues.push(value.title);
  });
  if (listValues.includes(request.titleForm)) {
    return request.setBlock(true);
  } else {
    return request.setBlock(false);
  }
};
