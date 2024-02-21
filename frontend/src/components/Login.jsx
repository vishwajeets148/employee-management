import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import('./style.css')

const Login = () => {

 const [values,setValues] = useState({ email:"",  password:""})

 const navigate = useNavigate()
 const [error, setError] = useState(null)

 axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({...values, [e.target.name]: e.target.value})
    axios.post('http://localhost:5000/auth/adminlogin', values)
    .then(res=>{
      if(res.data.loginStatus) {
        localStorage.setItem("valid", true)
        navigate('/dashboard')
    } else {
        setError(res.data.Error)
    }
      
      // console.log(res)
    
    
    })
    .catch(err=>console.log(err))
  }



  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning' >
          {error && error}
        </div>
      <h2>Login Page</h2>
      <form  onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className=''  htmlFor='email'><strong>Email:</strong></label>
            <input type='email' name="email" onChange={(e)=>setValues({...values, email:e.target.value})} placeholder='Enter Email'  className='form-control rounded-0' />
        </div>
        <div  className='mb-3'>
            <label htmlFor='password'><strong>Password:</strong></label>
            <input type='password' name="password" onChange={(e)=>setValues({...values, password:e.target.value})} placeholder='Enter Password' className='form-control rounded-0' />
        </div>
        <button className='btn btn-success w-100 rounded-0'>Login</button>
      </form>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Login