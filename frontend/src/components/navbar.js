import React from "react";
import Button from "../components/reusable/button";
import * as Icon from 'react-bootstrap-icons';
import COLORS from "../utils/colors";
import "../css/navbar.css"

function NavBar({user}) {
    const navBrandStyle = {
        color: COLORS.catalineblue
    }
	return (
		<nav className="navbar navbar-light bg-light shadow">
            <a className="ml-2" href="/home" style={navBrandStyle}>
                <h5 className="d-inline">
                    RentHouse
                </h5>
            </a>
           
            <a className="ml-5" href="/home">
                <Icon.HouseFill color={COLORS.catalineblue} size={40}/>
            </a>
            <div className='float-right'>
                {user ? 
                    (
                        <div>
                            Welcome {user}
                            <form action="/logout" method="get" className="d-inline">
                                <Button type="primary" href="/logout" text="Logout"/>
                            </form>
                        </div>
                        
                    ) : (
                        <>
                            <a href="/signup">
                                <Button type="success" text="Signup"/> 
                            </a>
                            <a href="/login">
                                <Button type="success" href="/login" text="Login"/>
                            </a>   
                        </>
                    )
                }
                
                
            </div>
        </nav>
	);
}
export default NavBar;
