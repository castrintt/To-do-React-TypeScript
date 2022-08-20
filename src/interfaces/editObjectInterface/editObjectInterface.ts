import { FormBase } from "../formBaseInterface/formBase";
type Text = string;
export interface EditObjectInterface {
  editObject: FormBase;
  setFormData: (newState: FormBase) => void;
  editTitle: Text;
  editDifficulty: Text;
  titleEvent: Text;
  difficultyEvent: Text;
}
