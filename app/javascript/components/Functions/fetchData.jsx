import { useState } from 'react';
import MainSearch from '../Search/MainSearch';
import Profile from '../Profile/Profile';
import CareerCard from '../CareerCard/CareerCard';
import React from 'react';

const fetchData = (props) => {

    fetch(props.url, {
        method: 'POST',
        headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: 'guest1',
            password: 'welcome'
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            let date = new Date();
            let month = date.getMonth() + 1;
            let hour = date.getHours();
            let currentDate = `${month.toString()}/${date.getDate().toString()}/${date.getFullYear().toString()} at ${hour.toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`

            this.setState({ time: date.getSeconds() })

            const bookmarks = data.user.bookmarks ? data.user.bookmarks : []

            localStorage.setItem('userID', 1);
            localStorage.setItem('user', this.state.userName);
            localStorage.setItem('userBookmarks', bookmarks) //need to turn this into an array
            localStorage.setItem('startTime', date);

            const currentUser = new User(1, this.state.userName, bookmarks, this.state.time)
            this.props.history.push({ pathname: '/main', state: { currentUser } });
        })
}

export default fetchData