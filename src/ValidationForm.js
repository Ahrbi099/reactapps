import React from "react";
import { useState, useEffect } from "react";
import './ValidationForm.css';

export default function ValidationForm(){
    const initialValues= {name:"", bday:"",gender:"",email:"",phone:""};
    const [userdata, setUserData]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);


    const handleChange= (e) => {
      const {name,value}= e.target;
      setUserData({...userdata, [name]:value});  
    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        setFormErrors(validate(userdata));
        setIsSubmit(true);
    };

    useEffect( ()=>{
        if(Object.keys(formErrors).length=== 0 && isSubmit){
        console.log(userdata);
    } }, [formErrors]);
    
    const validate=(values) =>{
        const errors = {};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name){
            errors.name="User Name is Required!";
        }

        if (!values.bday){
            errors.bday="Birthday is Required!";
        }

        if (!values.email){
            errors.email="Email is Required!";
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }

        if (!values.phone){
            errors.phone="Phone is Required!";
        }

        return errors;
    };
    return (
        <div>
            <pre></pre>
            <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Registration Information</h2>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Name" name="name" value={userdata.name} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.name}</p>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Birthdate" name="birthday" value={userdata.bday} onChange={handleChange} />
                        </div>
                        <p>{formErrors.bday}</p>
                        <div class="input-group">
                            <input class="input--style-3" type="email" placeholder="Email" name="email" value={userdata.email} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.email}</p>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Phone" name="phone" value={userdata.phone} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.phone}</p>
                        <div class="p-t-10">
                            <button class="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )

}