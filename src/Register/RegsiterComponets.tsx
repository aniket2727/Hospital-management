import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const RegisterComponents: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ userName: '', userEmail: '', userPassword: '' });

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to Healthcare.com</h1>
        <p className="text-center text-gray-600">Register Here</p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
