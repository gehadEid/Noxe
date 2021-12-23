import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img from './img/registr.png';
import style from './Register.module.css';




export default function Register() {

    let navigate = useNavigate();
    let[error,setError]=useState('');
    let[loading,setLoading]=useState(false);
    let[errorList,setErrorList]=useState([]);

    let[user,setUser]=useState(
        {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            age:"0"
        }
    );
     

    function getUser(e)
    {
        // copy from user best bracktes
        let myUser={...user};      //spread operator
    //    get name dainamc from input = value 
        myUser[e.target.name]=e.target.value;
        setUser(myUser)
    }



    function validateForm()
    {
        let schema=Joi.object
        ({
            first_name:Joi.string().alphanum().min(3).max(10).required(),
            last_name:Joi.string().alphanum().min(3).max(10).required(),
            email:Joi.string().required().email({tlds:{allow:['com','net','eg']}}),
            password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),
            age:Joi.number().min(16).max(60).required()
        })
       return schema.validate(user,{abortEarly:false})
    }

    async function submitForm(e)
    {
        e.preventDefault(); 
        let validationResult= validateForm();
        console.log(validationResult);

        if(validationResult.error)
        {
            setErrorList(validationResult.error.details)
        }
        else
        {
            setLoading(true);
            let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signup' ,user);
            if(data.message==='success')
            {
                navigate('/login');
                setLoading(false)
            }
            else
            {
             setError(data.message);
             setLoading(false)
            }

        }
   
    }

  
    return (
        <div className='py-5 container'>
            <div className="row justify-content-between">
                <div className="col-md-8">
                <h1>Registeration Form</h1>
                {/* || onClick in button */}
            <form onSubmit={submitForm}>
                {errorList.map((error,index)=><li key={index} className='text-danger' >{error.message}</li>)}
                {error?<li className='text-danger'>{error}</li>:''}
                <div className="py-2">
                    <label htmlFor="first_name">First Name</label>
                    <input onChange={getUser} type="text" className='form-control' name='first_name'/>
                </div>

                <div className="py-2">
                    <label htmlFor="last_name">Last Name</label>
                    <input onChange={getUser} type="text" className='form-control' name='last_name'/>
                </div>

                <div className="py-2">
                    <label htmlFor="email">Email</label>
                    <input onChange={getUser} type="text" className='form-control' name='email'/>
                </div>

                <div className="py-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={getUser} type="text" className='form-control' name='password'/>
                </div>

                <div className="py-2">
                    <label htmlFor="age">Age</label>
                    <input onChange={getUser} type="number" className='form-control' name='age'/>
                </div>
                <button type='submit' className='py-2 btn btn-light'>
                    {loading?<i className='fas fa-spinner fa-spin'></i>:'Register'}
                </button>
            </form>
                </div>

                <div className="col-md-4 text-center">
                <img src={img} alt='404' className={`${style.img404} py-5`}/>
                </div>
            </div>
        </div>
    )
}
