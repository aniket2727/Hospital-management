
import { useNavigate } from 'react-router-dom';

/**
 * This is the home function that displays the initial information about the web application.
 * Various block components are present on this page which provide gateways to navigate throughout the page.
 */

// Type definition for homepage data
interface HomepageDataType {
    [key: string]: [string, string, string];
}

// HomepageComponents functional component
const HomepageComponents: React.FC = () => {
    const homepageData: HomepageDataType = {
        "New Entry Patient": ["Click here to add new entry", "Add", "/patient/register"],
        "Search Patient Details": ["Click here to search patient", "Search", "/patient/search"],
        "Search Staff": ["Click here to search staff", "Staff Search", "/staff/search"],
        "Change Status Of Patient": ["Click here to change patient status", "Change Status", "/patient/status"],
        "Discharge Status": ["Click here to discharge patient", "Discharge", "/patient/discharge"]
    };

    const navigate = useNavigate();

    const handleNavigation = (navigationLink: string) => {
        console.log(navigationLink)   // debigging perpose

        let timeOutId:NodeJS.Timeout;

        const navigatewithDelay=()=>{
            timeOutId=setTimeout(()=>{
                navigate(navigationLink);
            },1000);
        }
        
          // Start navigation with delay
        navigatewithDelay()
      
         // Returning a function to clear the timeout if necessary
        return()=> clearTimeout(timeOutId);
          
    };

    return (
        <div className="container mx-auto p-6 space-y-4">
            {Object.entries(homepageData).map(([key, [description, buttonText, navigationLink]]) => (
                <div key={key} className="border p-4 rounded-lg shadow-md bg-white">
                    <h1 className="text-2xl font-bold mb-2">{key}</h1>
                    <p className="text-lg mb-4">{description}</p>
                    <button 
                        onClick={() => handleNavigation(navigationLink)} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {buttonText}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default HomepageComponents;
