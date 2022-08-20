import { FormBase } from "../formBaseInterface/formBase";

export interface FormStateControl {
  formData: FormBase;
  setFormData: (newState: FormBase) => void;
}
