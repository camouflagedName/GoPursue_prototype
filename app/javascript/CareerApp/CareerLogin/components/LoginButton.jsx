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
            fetchData(event, history, props.type, { user: props.user, password: props.password })





            //POST user data
            /*
                
                fetch(url, {
                    method: 'POST',
                    headers: {
                        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            name: props.user,
                            age: 0,
                            password: 'welcome',
                            password_confirmation: 'welcome',
                            created_on: currentDate,
                            num_logins: 1
                        }
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Bad network response.");
                    })
                    .then(res => {
                        const currentUser = new User(res.id, res.name, [], startTime)
                        localStorage.setItem('userID', res.id)
                        localStorage.setItem('user', res.name)
                        localStorage.setItem('startTime', startTime)
                        alert(currentUser.initialUserName)
                        history.push({ pathname: '/main', state: { currentUser } })
                    })
                    .catch(error => console.log(error.message))
            */
        }
    }

    return (
        <button className="btn btn-lg btn-primary" type="button" onClick={handleClick}>
            Enter
        </button>
    )
}

export default Login