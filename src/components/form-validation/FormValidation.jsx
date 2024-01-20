import * as yup from 'yup' 

export const validateSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().main(4).max(10).required()
})