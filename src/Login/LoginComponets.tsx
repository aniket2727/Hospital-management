


import React, { useState } from 'react'


interface useformdata{
    email:string,
    password:string
}

const Useform=(initialvalues:useformdata)=>{
    const[values,setValues]=useState<useformdata>(initialvalues);

    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;

        setValues({
            ...values,
            [name]:value,
        })
    }

    return{
        values,
        handlechange
    }
}

const LoginComponets:React.FC=()=>{

    const {values,handlechange}=Useform({email:'', password:''});

    const handlesubmit=(e:React.FormEvent)=>{

        e.preventDefault();

        console.log(values.email);
        console.log(values.password)

    }
    return(
        <div>
             <h2>Login here </h2>
             
               <form onSubmit={handlesubmit}>
               <div>
                <label  htmlFor="email">Email:</label>
                     <input name='email' type='text'  id='email' value={values.email} onChange={handlechange} />
                     </div>

                <div> 
                    <label>Password:</label>
                    <input name='pasword' type='password' id='password' value={values.password} onChange={handlechange}/>
                </div>     

                <button type='submit'>Login</button>
               </form>
            
        </div>
    )
}


export default LoginComponets;