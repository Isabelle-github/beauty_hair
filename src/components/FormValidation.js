import * as yup from "yup";

export const contactSchema = you.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});
