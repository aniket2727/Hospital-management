import React, { useEffect, useRef, useState } from 'react';

interface InputsPropsData {
    inputsprops: {
        height: string;
        width: string;
        innertext: string;
    };
    
}

const Inputscomponets: React.FC<InputsPropsData> = ({ inputsprops }) => {
    // State variables for props
    const [height, setHeight] = useState(inputsprops.height || '50px');
    const [width, setWidth] = useState(inputsprops.width || '100px');
    const [innertext, setInnertext] = useState(inputsprops.innertext || 'search');

    // State variable for input data
    const [inputdata, setInputdata] = useState('');

    //timeout id ref
    const timeoutId=useRef<NodeJS.Timeout | null>(null)

    // useEffect to update state based on props changes
    useEffect(() => {
        if (inputsprops.height !== '' && inputsprops.height !== undefined) {
            setHeight(inputsprops.height);
        }
        if (inputsprops.width !== '' && inputsprops.width !== undefined) {
            setWidth(inputsprops.width);
        }
        if (inputsprops.innertext !== '' && inputsprops.innertext !== undefined) {
            setInnertext(inputsprops.innertext);
        }
    }, [inputsprops]);


    useEffect(()=>{

      const getDataFromServer = async () => {
         // Perform the API call here
         console.log('Fetching data from server for:', inputdata);
      };
      
     
      if(timeoutId.current){
        clearTimeout(timeoutId.current)
      }
     
      timeoutId.current=setTimeout(()=>{
         getDataFromServer();
      },1000)

      return () => {
      if (timeoutId.current) {
          clearTimeout(timeoutId.current);
      }
  };
     

    },[inputdata])

    return (
        <div className='main-input-comp'>
            <input
                style={{ height: height, width: width }}
                placeholder={innertext}
                type='text'
                value={inputdata}
                onChange={(e) => setInputdata(e.target.value)}
            />
        </div>
    );
};

export default Inputscomponets;
