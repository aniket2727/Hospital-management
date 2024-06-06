



//this code is written by aniket kadam

/**
 * this is the home funtion that display the iniatl infomation about the web application
 * Various block componets are present in this page which are provide gateways to navigate throughout the page
 */


// interface 
interface HomepageDataType {
    [key: string]: [string, string];
}


const HomepageComponets=()=>{

    const HomepageData:HomepageDataType={
        "New Entry Patient":["click here to add new entry","Add"],
        "Search Pateint Deatials":["click here to search patient","Search"],
        "Search Staff":["click here to search staff","staff search"],
        "Change Status Of Patient":["click here change patient status","change status"],
        "Dischage Status":["click here to discharge patient","dischage"]

    }
    return(
        <div>
            {
                Object.entries(HomepageData).map(([key,values])=>(
                    <div key={key}>
                        <h1>{key}</h1>
                        <h2>{values[0]}</h2>
                        <button>{values[1]}</button>
                    </div>    
                ))
            } 
        </div>
    )
}


export default HomepageComponets;