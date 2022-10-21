import * as Yup from "yup";
import 'yup-phone';

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please enter your First name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  gender: Yup.string().required("Please select your gender"),
  phone: Yup.string().phone("IN", true).required("Please enter your contact no"),
  hobby: Yup.string().min(2).max(25),
});