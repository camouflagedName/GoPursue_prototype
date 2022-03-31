import React from "react";
import { useHistory } from "react-router-dom";
import { API_ROOT } from "../../../packs/apiRoot";
import User from "../../UserData";
import fetchData from "../../../Functions/fetchData";


const Login = (props) => {
    let history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();

        if (props.user === '' || props.password === '') {
            props.error(true)
        }

        else {
            props.error(false)
            fetchData(event, history, props.type, { user: props.user, password: props.password, email: props.email })
        }
    }

    return (
        <button className="btn btn-lg btn-primary" type="button" onClick={handleClick}>
            Enter
        </button>
    )
}

export default Login