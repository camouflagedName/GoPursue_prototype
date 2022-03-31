import React from 'react';
import logo from "../../../assets/logo/logo(cropped).jpg"


export default function NewUserMailer(props) {
    let user;
    return (
        <>
            {/*<div className='col-6 mb-5'>
                <div className="d-flex row">
                    <img src={logo} alt="logo" />
                </div>
    </div>*/}
            <h5>Welcome to GoPursue!</h5>
            <p>To continue with the login process, please use the following link: <a href={`/api/v1/users/confirm_email/${user}`}>Verify your email address</a></p>
            <hr />
            <p><small>This message was automatically generated. Please do not reply to this email.</small></p>

        </>
    )
}

