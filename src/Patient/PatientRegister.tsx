// src/PatientRegister.tsx

import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

interface UserFormDataType {
  patientName: string;
  patientAge: string;
  patientGender: string;
  patientBirthDate: string;
  doctorName: string;
  relativeName: string;
  relativeStatus: string;
  dName: string;
}

const PatientRegister: React.FC = () => {
  const [formData, setFormData] = useState<UserFormDataType>({
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientBirthDate: '',
    doctorName: '',
    relativeName: '',
    relativeStatus: '',
    dName: ''
  });

  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormData = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // For debugging purposes
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Welcome to Healthcare.com</h1>
        <h2 className="text-2xl font-semibold text-center">Register Here</h2>

        <form onSubmit={handleFormData} className="space-y-4">
          {/* Patient name input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Patient Name</label>
            <input
              placeholder="Enter Patient Name"
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Patient age input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Patient Age</label>
            <input
              placeholder="Enter Patient Age"
              type="number"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Patient gender input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter The Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="patientGender"
                  value="Male"
                  checked={formData.patientGender === 'Male'}
                  onChange={handleData}
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="patientGender"
                  value="Female"
                  checked={formData.patientGender === 'Female'}
                  onChange={handleData}
                  className="form-radio"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          {/* Patient birthdate input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Patient Birth Date</label>
            <input
              placeholder="Enter Patient Birth Date"
              type="date"
              name="patientBirthDate"
              value={formData.patientBirthDate}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Doctor name input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Doctor Name</label>
            <input
              placeholder="Enter Doctor Name"
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Relative name input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Patient Relative Name</label>
            <input
              placeholder="Enter Relative Name"
              type="text"
              name="relativeName"
              value={formData.relativeName}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Relative status select box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Relative Status</label>
            <select
              name="relativeStatus"
              onChange={handleData}
              value={formData.relativeStatus}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>Select Status</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Brother</option>
              <option>Wife</option>
              <option>Relative Cousins</option>
              <option>Friend</option>
            </select>
          </div>

          {/* Disease name input box */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Disease Name</label>
            <input
              placeholder="Enter Disease Name"
              type="text"
              name="dName"
              value={formData.dName}
              onChange={handleData}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientRegister;
