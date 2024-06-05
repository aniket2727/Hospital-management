import React, { useState } from 'react';

interface useformdata {
    email: string;
    password: string;
}

const Useform = (initialvalues: useformdata) => {
    const [values, setValues] = useState<useformdata>(initialvalues);

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return {
        values,
        handlechange,
    };
};

const LoginComponets: React.FC = () => {
    const { values, handlechange } = Useform({ email: '', password: '' });

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(values.email);
        console.log(values.password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login here</h2>
                <form onSubmit={handlesubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handlechange}
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            value={values.password}
                            onChange={handlechange}
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponets;
