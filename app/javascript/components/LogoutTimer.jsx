import { Fragment, useEffect } from 'react';
import React from 'react';
import { API_ROOT } from '../packs/apiRoot';


export default function LogoutTimer(props) {
    let time;
    let reset = () => {
        clearTimeout(time);
        time = setTimeout(() => {logout(props.startTime, props.location, props.user)}, 1000*60*20); //20 minutes
    }

    function totalTime(startTime, user){
        if(user) {
            const url = `${API_ROOT}/api/v1/users/time/${user}`
            let endTime = Date.now()
            let avgTime = (endTime - startTime)/60000;
    
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

    function logout(startTime, location, user) {
        //totalTime(prevTime, user);
        totalTime(startTime, user)
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