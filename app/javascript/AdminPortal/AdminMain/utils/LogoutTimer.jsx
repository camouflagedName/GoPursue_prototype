import { Fragment, useEffect } from 'react';
import React from 'react';
import { API_ROOT } from '../../../packs/apiRoot';
import TotalTime from './TotalTime ';

export default function LogoutTimer(props) {
    let time;
    let reset = () => {
        clearTimeout(time);
        time = setTimeout(() => {logout(props.props, props.location, props.user)}, 1000*60*20); //20 minutes
    }

    function totalTime(prevTime, user){
        if(user) {
            const url = `${API_ROOT}/api/v1/users/time/${user}`
            let date = new Date();
            let avgTime = (date - prevTime.location.state.time)/60000;
    
            fetch(url, {
                method: 'PUT',
                headers:{
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({avg_time: avgTime})
            })
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Bad network response.");
            })
            .catch(error => error.message);
        }
    }

    function logout(prevTime, location, user) {
        //totalTime(prevTime, user);
        <TotalTime time={prevTime.location.state.time} user={user}/>
        clearTimeout(time);
        document.removeEventListener('load', reset);
        document.removeEventListener('scroll', reset);
        document.removeEventListener('mousemove', reset);
        localStorage.clear();
        alert("You are now logged out.")
        window.location.replace(location);
    }

    useEffect(() => {
        document.addEventListener('load', reset);
        document.addEventListener('scroll', reset);
        document.addEventListener('mousemove', reset);
       
        reset();
    }, []);

    return (
        <></>
    );
}