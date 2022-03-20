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
            <p>Your email is now registered with GoPursue. You will now be automatically redirected to the app.</p>
            <hr />
            <p><small>Click this link if the redirect does not work.</small></p>

        </>
    )
}

