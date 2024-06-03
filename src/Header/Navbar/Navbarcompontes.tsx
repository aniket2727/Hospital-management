import React from "react";
import ButtonsComponets from "../../Buttons/ButtonsComp";
import Inputscomponets from "../../Inputs/Inputscomponets";
import './navbarcomp.css'


const NavbarComponents: React.FC = () => {
    return (
        <div className="main-navbar-comp">
             <div className="main-navbar-second">
                   <h1>Healcare.com</h1>
                   <Inputscomponets  inputsprops={{height:'30px',width:'450px' ,innertext:'search'}}/>
                   <ButtonsComponets data={{height:'30px',width:'80px',backgroundColor:'green',textinput:"login"}}/>
                   <ButtonsComponets data={{height:'30px',width:'80px',backgroundColor:'green',textinput:"menu"}}/>
                   <ButtonsComponets data={{height:'30px',width:'80px',backgroundColor:'green',textinput:"about"}}/>
             </div>   
              
        </div>
    );
}

export default NavbarComponents;
