import { useEffect } from 'react';
import React from 'react';

export default function LogoutTimer(props) {
    let time;
    let reset = () => {
        clearTimeout(time);
        time = setTimeout(() => {logout(props.location)}, 1000*60*20); //20 minutes
    }

    const logout = location => {
        clearTimeout(time);
        document.removeEventListener('load', reset);
        document.removeEventListener('scroll', reset);
        document.removeEventListener('mousemove', reset);
        localStorage.clear();
        alert("You are now logged out.")
        window.location.replace(location);
    }

    //reset the timer aany time the user interacts with the app
    useEffect(() => {
        document.addEventListener('load', reset);
        document.addEventListener('scroll', reset);
        document.addEventListener('mousemove', reset);
        document.addEventListener('ontouchstart', reset);
       
        reset();
    }, []);

    return (
        <></>
    );
}