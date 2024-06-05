


// this code for the name validations
// name lenght must be greater than 2 and does not contains any number 


export const validName=(name:string):boolean=>{
    return name.length>3 && !checkNumberIsPresent(name);
}


const checkNumberIsPresent=(str:string):boolean=>{
    return /\d/.test(str); // Check if any digit is present in the string
}