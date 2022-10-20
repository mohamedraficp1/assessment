import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export function  LoginForm() { 
  const navigate = useNavigate()
return(
  <div>
  
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        navigate("/home");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" placeholder='Username or Email' className="inputField"/>
          {errors.firstName && touched.firstName ? (
            <div style={{color:'red', marginTop: "8px"}}>{errors.firstName}</div>
          ) : null}
          <Field name="lastName"  placeholder='Password' className="inputField"/>
          {errors.lastName && touched.lastName ? (
            <div style={{color:'red', marginTop: "8px"}}>{errors.lastName}</div>
          ) : null}
         
          <button type="submit"   style={{display:'block',color:'white',background: 'black' , width: '316px'}}  className="inputField" >Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
    }