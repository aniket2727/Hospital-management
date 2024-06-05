import React, { useState, ChangeEvent, FormEvent } from 'react';
import { validateEmail } from '../HelperFuntions/EmailValidations';
import { validatePassword } from '../HelperFuntions/PasswordValidations';
import { validName } from '../HelperFuntions/NameValidations';


interface FormData {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const RegisterComponents: React.FC = () => {
  // Form data state
  const [formData, setFormData] = useState<FormData>({ userName: '', userEmail: '', userPassword: '' });

  // Validation state
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid,setIsPasswordValid]=useState(true);
  const[isNameValid,setIsNameValid]=useState(true);

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailValidationResult = validateEmail(formData.userEmail);
    setIsEmailValid(emailValidationResult);

    const passwordValidationResult=validatePassword(formData.userPassword);
    setIsPasswordValid(passwordValidationResult);

    const nameValidationResult=validName(formData.userName);
    setIsNameValid(nameValidationResult);
    
    

    if (emailValidationResult) {
      console.log('Form data:', formData);
    } else {
      console.log('Invalid email address');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-3xl font-bold text-center">Welcome to Healthcare.com</h1>
          <p className="text-center text-gray-600">Register Here</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              placeholder="username"
              name="userName"
              type="text"
              onChange={handleFormData}
              value={formData.userName}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
             {!isNameValid && <span  className="text-red-500 text-sm">Name is invalid</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">UserEmail:</label>
            <input
              placeholder="useremail"
              name="userEmail"
              type="email"
              onChange={handleFormData}
              value={formData.userEmail}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {!isEmailValid && <p className="text-red-500 text-sm">Invalid email address</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              placeholder="password"
              name="userPassword"
              type="password"
              onChange={handleFormData}
              value={formData.userPassword}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {
                !isPasswordValid && <span className="text-red-500 text-sm">Password must include capital letter number and lenght is greater than 8</span>
            }
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default RegisterComponents;
