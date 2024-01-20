import React from 'react'
import "./form.scss"
import * as yup from 'yup'  
import { validateSchema } from './FormValidation'


const Form = () => {

  const handleSubmit = async (e)=>{
    e.preventDefault()
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value ,
      password: e.target[2].value ,
    }
    const isValid = await validateSchema.isValid(formData)
    console.log(isValid); 
  }

  return (
    <>
    <h2 className='first-form-h2'>#1 Form Validation</h2>
    <div className='form-main-div'>

    <div className='form-div'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='email'/>
      <input type="text" placeholder='password'/>
      <input type="submit" />
    </form>
    </div>
    
    </div>
    </>
  )
}

export default Form