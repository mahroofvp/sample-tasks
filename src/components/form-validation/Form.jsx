import React from 'react'
import "./form.scss" 
import { validateSchema } from './FormValidation'
import { Formik, useFormik } from 'formik';
import {toast,Toaster} from 'react-hot-toast'



const onSubmit = (values, actions )=>{
  
  actions.resetForm()
 toast.success("Submitted Successfully")
}



const Form = () => {
  

  const formik = useFormik({

    initialValues:{
    name:'',
    email: '',
    password:'',

  },
   validationSchema: validateSchema,
   onSubmit

  })

  console.log(formik.errors);
 

 
  return (
    <>
    <div>
    <Toaster
    position="top-center"
    />
    </div>
    
    <div className='form-main-div'>

    <div className='form-div'>
    <form onSubmit={formik.handleSubmit}>
      {formik.errors.name && formik.touched.name ? <p className='error-msg'>{formik.errors.name}</p>:""}
      <input className={formik.errors.name && formik.touched.name ?  "input-error":""}  id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder='Name'/>
      {formik.errors.email && formik.touched.email ? <p className='error-msg'>{formik.errors.email}</p>:""}
      <input className={formik.errors.email && formik.touched.email ?  "input-error":""}  id='email' value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" placeholder='email'/>
      {formik.errors.password && formik.touched.password ? <p className='error-msg'>{formik.errors.password}</p>:""}
      <input className={formik.errors.password && formik.touched.password ?  "input-error":""}  id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder='password'/>
      <input className='form-button' type="submit" />
    </form>
    </div>
    
    </div>
    </>
  )
}

export default Form