


import React from 'react';




interface inputspropsdata{
   inputsprops:{
      height:string,
      width:string,
      innertext:string
   }    
}

const Inputscomponets:React.FC<inputspropsdata>=({inputsprops})=>{
     return(
        <div className='main-input-comp'>
           <input style={{height:inputsprops.height,width:inputsprops.width}} placeholder={inputsprops.innertext}/>
        </div>
     )
}


export default Inputscomponets;