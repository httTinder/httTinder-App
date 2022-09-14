import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .min(8, "deve conter 8 digitos")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Senha deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha!")
    .oneOf([yup.ref("password")], "Senhas não correspondem")
    .required("Confirmação de email é obrigatória"),
  age: yup
    .number()
    .min(18, "A idade minima é 18 anos")
    .required("Idade é obrigatória"),
});

export default registerSchema;
