import * as yup from 'yup'

export const schemaValidation = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Minimo de 2 caracteres')
    .max(60, 'Máximo de 60 caracteres')
    .required('O campo em questão não pode ser em branco'),
  desc: yup.string().min(2, 'Minimo de 2 caracteres').required('O campo em questão não pode ser em branco'),
})
