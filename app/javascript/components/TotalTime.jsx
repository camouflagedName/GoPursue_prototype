import { Fragment, useEffect } from 'react';
import React from 'react';
import { API_ROOT } from '../packs/apiRoot';

export default function TotalTime(props) {
    if(props.user) {
        const url = `${API_ROOT}/api/v1/users/time/${user}`
        let date = new Date();
        let avgTime = (date - props.time)/60000;

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