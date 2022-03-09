import { useState } from 'react';
import MainSearch from '../Search/MainSearch';
import Profile from '../Profile/Profile';
import CareerCard from '../CareerCard/CareerCard';
import React from 'react';

export function CurrentScreen(props) {

    switch (props.screenName) {
        case "search":
            return <MainSearch term={props.stateProps[0]} career={props.stateProps[1]}  screen={props.screenState} userData={props.currentUser} style={props.style} />
        case "careercard":
            return <CareerCard state={props.stateProps[0]} screen={props.screenState} userData={props.currentUser} style={props.style} />
        case "profile":
            return <Profile screen={props.screenState} userData={props.currentUser} style={props.style} />
    }
}

