import React from 'react';
import {ModalTitle} from "react-bootstrap";

const RegisterPage:React.FC=():JSX.Element=> {

    return (
        <div>
            <div className="container" style={{marginTop:"10%"}}>
            <form>
                <ModalTitle>Account Register</ModalTitle>
                <div className="container mt-2">
                <label htmlFor="name">Please Input Your Name</label>
                <input type="text" id="name" name="name" placeholder={"John Smith"}/>
                </div>
                <div className="container mt-2">
                <label htmlFor="pass">Please Input your Password</label>
                <input type="text" id="pass" name="pass" placeholder={"******"}/>
                </div>
                <div className="container mt-2 mb-2">
                    <label htmlFor="pass">Please Repeat your Password</label>
                    <input type="text" id="passRepeat" name="pass_repeat" placeholder={"******"}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
}

export default RegisterPage;
