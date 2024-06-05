// this code is wriiten in typescript and the react by dankcoder aniket


// this code contains the patient register form


import React, { FormEvent } from 'react';


const PatientRegister=()=>{

    const handleFormData=(e:FormEvent)=>{
        e.preventDefault();
    }
    return(
          <div>
            <h1>welcome to the healcare.com</h1>
            <h2>Register here</h2>
            
            <div>
                <form onSubmit={handleFormData}>


                </form>
            </div>

          </div>
    )
}

export default PatientRegister;