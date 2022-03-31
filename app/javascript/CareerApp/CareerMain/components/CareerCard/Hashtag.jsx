import React from 'react';
import { API_ROOT } from '../../../../packs/apiRoot';


export class Hashtags extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }
    //makes a call to backend for 
    search(searchTerm) {
        const url = `${API_ROOT}/api/v1/careers/find`;
        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                term: searchTerm
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Career Database: Bad network response.");
            })
            .then(careerData => {
                //action - onClick event? --> render Search component
                this.props.screen("search", searchTerm, careerData)
            });
    }

    render() {
        let insertHashtag = this.props.search.map((hashtag, index) => (<a key={index} className="text-decoration-none" onClick={() => this.search(hashtag)}>#{hashtag} </a>));

        return (
            <>
                {insertHashtag}
            </>
        )
    }
}