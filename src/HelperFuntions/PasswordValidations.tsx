// src/HelperFunctions/passwordValidations.ts




// passowrd validations using the curring and closure
export const validatePassword = (minLength: number) => {
    
    // inner funntion that perform the actual logic
    return (password:string):boolean=>{

         // Helper function to test if a string matches a regular expression
       const testRegex = (regex: RegExp, str: string) => regex.test(str);

         // Define regular expressions for different character types
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Validate password length and character types
    return (
      password.length >= minLength &&
      testRegex(hasUpperCase, password) &&
      testRegex(hasLowerCase, password) &&
      testRegex(hasNumber, password) &&
      testRegex(hasSpecialChar, password)
    );
    }
    
  };
  