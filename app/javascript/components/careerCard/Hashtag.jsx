import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { API_ROOT } from '../../packs/apiRoot';

export class Hashtags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hash: this.props.hashtag
        }

        this.search = this.search.bind(this);
    }

    search(term) {
        const url = `${API_ROOT}/api/v1/careers/find`;
        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                term: term
            })
        })
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Career Database: Bad network response.");
        })
        .then(response => {
            this.props.route.push({
                pathname: "/search",
                state: {
                    career: response,
                    term: term
                }
            })

        });
    }

    render() {
        let insertHash = this.props.search.map((hash, index) => (<a key={index} className="text-decoration-none" onClick={() => this.search(hash)}>#{hash} </a>));
       
        return (
            <>
                {insertHash}
            </>
        )
    }
}