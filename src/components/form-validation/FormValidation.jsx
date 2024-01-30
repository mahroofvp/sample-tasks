import * as yup from 'yup' 
const passwordRegex = "^(?=.*[A-Z])(?=.*[@$!%*?&])"

export const validateSchema = yup.object().shape({
    name: yup.string().required("Name field is required !"),
    email: yup.string().email("Please enter a valid email !").required("Email field is required !"),
    password: yup.string().min(4).matches(passwordRegex,
        {message:" Atleast one Capital letter and one special symbol required !"}).required("Password field is required !")
}) 

