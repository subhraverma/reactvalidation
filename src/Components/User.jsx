import React from 'react'
import "../App.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const User=()=>{
 const navigate=useNavigate();
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            mob:'',
            pass:'',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            mob: Yup.string().max(10).required('Mobile no. is required'),
            pass: Yup.string()
              .min(6,'Password must be at least 6 characters')
              .required('Password is required'),
          }),     
        onSubmit: (values) =>{
            fetch("http://localhost:5000/user",{
                method:'POST',
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"Application/json",
                },
                body:JSON.stringify(values),
            }).then((response)=>
                response.json()
            ).then((data)=>{
                navigate("/showuser");
                console.log('Success:',data)
            }).catch((error)=>{
                console.error('Error:',error);
            });
           
        } ,  

    }) ; 
    return (
        <>
            <div className='container'>
                <div className='user'>
                    <h1>Create User</h1>
                    <form onSubmit={formik.handleSubmit}> 
                        <input
                            type='text'
                            placeholder='Enter Your Name'
                            className='input'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='name'
                            id='name'
                        />
                        {formik.errors.name && formik.touched.name?(
                            <p className='form-error'>{formik.errors.name}</p>
                        ):null}
                        <input
                            type='email'
                            placeholder='Enter Your Email'
                            className='input'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='email'
                            id='email'


                        />
                         {formik.errors.email && formik.touched.email?(
                            <p className='form-error'>{formik.errors.email}</p>
                        ):null}
                        <input
                            type='te'
                            placeholder='Enter Your Mobile No.'
                            className='input'
                            value={formik.values.mob}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='mob'
                            id='mob'

                        />
                        {formik.errors.mob && formik.touched.mob?(
                            <p>{formik.errors.mob}</p>
                        ):null}
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            className='input'
                            value={formik.values.pass}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                             name='pass'
                             id='pass'    
                        />
                        {formik.errors.pass && formik.touched.pass?(
                            <p className='form-error'>{formik.errors.pass}</p>
                        ):null}
                        
                        < button type='submit'
                                className='btn' 
                            >Save</button>
                    </form>
                     
                        
                </div>
            </div>
           
        </>
    )
}

export default User;