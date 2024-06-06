import React from 'react';

/**
 * This is the home function that displays the initial information about the web application.
 * Various block components are present on this page which provide gateways to navigate throughout the page.
 */

// Interface
interface HomepageDataType {
    [key: string]: [string, string];
}

const HomepageComponents: React.FC = () => {
    const homepageData: HomepageDataType = {
        "New Entry Patient": ["Click here to add new entry", "Add"],
        "Search Patient Details": ["Click here to search patient", "Search"],
        "Search Staff": ["Click here to search staff", "Staff Search"],
        "Change Status Of Patient": ["Click here to change patient status", "Change Status"],
        "Discharge Status": ["Click here to discharge patient", "Discharge"]
    };

    return (
        <div className="p-6 space-y-4">
            {Object.entries(homepageData).map(([key, values]) => (
                <div key={key} className="border p-4 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-2">{key}</h1>
                    <h2 className="text-lg mb-4">{values[0]}</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        {values[1]}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default HomepageComponents;
