import React from "react";
import ButtonsComponets from "../../Buttons/ButtonsComp";
import Inputscomponets from "../../Inputs/Inputscomponets";
import './navbarcomp.css'
import { debounce } from "../../HelperFuntions/Debounsing";

const NavbarComponents: React.FC = () => {


    // all the functions on the buttons click event

    const handleLoginOperations = debounce(() => {
        console.log("This is login operations");
    }, 500);

    const handleMenuOperations = debounce(() => {
        console.log("This is menu operations");
    }, 500);

    const handleAboutOperations = debounce(() => {
        console.log("This is about operations");
    }, 500);

    return (
        <div className="main-navbar-comp">
             <div className="main-navbar-second">
                   <h1>Healcare.com</h1>
                   <Inputscomponets inputsprops={{ height: '1.875rem', width: '28.125rem', innertext: 'search' }} />
                   <ButtonsComponets data={{ height: '1.875rem', width: '5rem', backgroundColor: '884dff', textinput: "login" }} onClick={handleLoginOperations} />
                   <ButtonsComponets data={{ height: '1.875rem', width: '5rem', backgroundColor: '4d79ff', textinput: "menu" }} onClick={handleMenuOperations} />
                   <ButtonsComponets data={{ height: '1.875rem', width: '5rem', backgroundColor: '4d79ff', textinput: "about" }} onClick={handleAboutOperations} />
             </div>   
              
        </div>
    );
}

export default NavbarComponents;
