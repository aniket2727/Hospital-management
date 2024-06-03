



import React from 'react'

interface buttoncomponetsprops{
    data:{
        height:string,
        width:string,
        backgroundColor:string,
        textinput:string
    }
}

const ButtonsComponets:React.FC<buttoncomponetsprops>=({data})=>{
    return(
        <div className='main-button-comp'>
             <button style={{height:data.height,width:data.width,backgroundColor:data.backgroundColor}}>{data.textinput}</button>
        </div>
    )
}




export default ButtonsComponets;