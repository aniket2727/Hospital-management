


// this code for the name validations
// name lenght must be greater than 2 and does not contains any number 


// closure method is used here


export const validName=(minLenght:number)=>{

     return (name:string):boolean=>{ 
        return name.length>minLenght&& !checkNumberIsPresent(name);   // return true or false ;
     } 
}


const checkNumberIsPresent=(str:string):boolean=>{
    return /\d/.test(str); // Check if any digit is present in the string     return true or false ;
}