import React from "react";
import {Navbar} from 'reactstrap';
import Logo from './Logo';
import Menue from './Menue';

const Navigation = ()=> {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Navbar dark color="dark">
                            <Logo />
                            <Menue />
                    </Navbar>
                </div> 
            </div>
        </div>
    );
    
}


export default Navigation;