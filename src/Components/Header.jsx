import React from "react";
import logo from '../assets/investment-calculator-logo.png'
import './Header.css'
const Header = props => {



    return(
        <div className="header">
            <img src={logo} alt="logo" />
             <h1>Investment Calculator</h1>
             {console.log('In header component')}






        </div>





    );

}





export default Header;