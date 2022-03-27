import React from 'react';
import logo from ".././../assets/logo/logo(cropped).jpg"


export default function Success(props) {
    let user;
    return (
        <>
            <div className='col-6 mb-5'>
                <div className="d-flex row">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <h5>Your email is now registered with GoPursue. You can return to the app to continue the login process.</h5>
        </>
    )
}

