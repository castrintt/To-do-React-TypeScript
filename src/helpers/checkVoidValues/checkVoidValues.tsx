type Text = string;
interface RequestObject {
  title: Text;
  difficulty: Text;
  block: (newState: boolean) => void;
}
export const checkVoidValues = (requestObject: RequestObject) => {
  if (requestObject.title === "" || requestObject.difficulty === "") {
    requestObject.block(true);
  } else {
    requestObject.block(false);
  }
};
