import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Results } from './Results';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID: localStorage.getItem('userID'),
            bookmarks: [],
            careerMatch: this.props.search ? this.props.search : []
        };
        this.search = this.search.bind(this);
    }

    search(term) {
        if(term != "") {
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
            .then(json => {
                    this.setState({ careerMatch: json })
            });
        }
    }

   componentDidMount() {
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;

        fetch(userURL)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("User Database: Bad network reponse.");
        })
        .then(json => {
            this.setState({ bookmarks: json.bookmarks })
        });
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <SearchBar search={this.search}/>
                </div>
                <div className="card-body">
                    {this.state.careerMatch.length >0 ? <Results results={this.state.careerMatch} user={this.state.bookmarks}/> : <div className="card-body"><h4 className="mt-5 mb-5">Careers will appear here.</h4></div>}
                </div>
            </>    
        );
    }
}

