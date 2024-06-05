


//   this is the register componets pages

import React, { useState } from 'react'
import { ChangeEvent,FormEvent } from 'react';


interface formData{
    userName:string,
    userEmail:string,
    userPassword:string

}

const RegisterComponets:React.FC=()=>{

    const[formData,setformData]=useState<formData>({userName:'',userEmail:'',userPassword:''});


    const handleFormData=(e:ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setformData({
            ...formData,
            [name]:value
        })
    }

    const handlesubmit=(e:FormEvent)=>{
          e.preventDefault();
          console.log(formData)
    }
    return(
        <div>
              <form onSubmit={handlesubmit}>
                  <h1>  welcome to the helthcare.com </h1>
                  <p>Register Here</p>
                  <div>
                    <label>Username:</label>
                    <input placeholder='username' onChange={handleFormData}  value={formData.userName} type='text' />
                  </div>

                  <div>
                    <label>UserEmail:</label>
                    <input placeholder='useremail' onChange={handleFormData} value={formData.userEmail} type='emai' />
                  </div>

                  <div>
                    <label>Password</label>
                    <input placeholder='password' onChange={handleFormData} value={formData.userPassword} />
                  </div>

                  <button type='submit'>Register</button>

              </form>
        </div>
    )
}

export  default RegisterComponets;