import * as yup from "yup"
import { emptyStringToNull } from "../utils/validation"

export const ProfileSchema = yup.object().shape({
  name: yup.string().transform(emptyStringToNull).required(),
  email: yup.string().transform(emptyStringToNull).email().required(),
  phone: yup.number().required(),
})
