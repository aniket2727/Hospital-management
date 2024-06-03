



import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

interface buttoncomponetsprops{
    data:{
        height:string,
        width:string,
        backgroundColor:string,
        textinput:string
    }
    onClick: () => void;
}

const ButtonsComponets:React.FC<buttoncomponetsprops>=({data,onClick})=>{

    // state variables
    const [heigth,setHeight]=useState(data.height || '50px');
    const [width,setWidth]=useState(data.width || '50px');
    const [backgroundColor,setBackgroundColor]=useState(data.backgroundColor || 'green')
    const[textinput,setTextinput]=useState(data.textinput || 'button')

    //useeffect for the assign the values
    useEffect(()=>{
        if(data.height!=='' && data.height!==undefined){
            setHeight(data.height)
        }
        if(data.width!=='' && data.width!==undefined){
            setWidth(data.width)
        }
        if(data.backgroundColor!=='' && data.backgroundColor!==undefined){
            setBackgroundColor(data.backgroundColor)
        }
        if(data.textinput!=='' && data.textinput!==undefined){
            setTextinput(data.textinput)
        }

    },[data])

    
    return(
        <div className='main-button-comp'>
             <button style={{height:heigth,width:width,backgroundColor:backgroundColor}}  
              aria-label={textinput} 
              onClick={onClick}>{textinput}</button>
        </div>
    )
}




export default ButtonsComponets;