import React from 'react';
import { API_ROOT } from '../../../../packs/apiRoot';
import { SearchBar } from './SearchBar';
import { Results } from './Results';
import { SurpriseMeButton } from './SurpriseMeButton';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: localStorage.getItem('userID'),
            bookmarks: [],
            careerMatch: this.props.search ? this.props.search : [],
            searchError: '',
            searchTerm: this.props.term ? this.props.term : ''
        };
        this.search = this.search.bind(this);
    }

    search(term) {
        if (this.props.search != '') {
            term = this.props.search;
        }

        if (term != "") {
            this.setState({ searchTerm: term });

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
                    if (json[0] === "Error.") {
                        this.setState({ searchError: `No results found for ${term}. Try another word.`, careerMatch: [] });
                        return;
                    }
                    else {
                        this.setState({ careerMatch: json, searchError: '' });
                    }
                });
        }
        else {
            this.setState({ searchError: "Enter a keyword before proceeding." });
        }
    }

    componentDidMount() {
        const userURL = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;
        fetch(userURL)
            .then(response => {
                if (response.ok) {
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
                    <SearchBar search={this.search} />
                    <p className="mt-0 offset-1 text-primary">{this.state.searchError}</p>
                </div>
                <div className="row mt-3 offset-3 col-6">
                    <SurpriseMeButton search={this.search} screen={this.props.screen} />
                </div>
                <div className="card-body">
                    {
                        this.state.careerMatch.length > 0
                            ? <Results results={this.state.careerMatch} user={this.state.bookmarks} term={this.state.searchTerm} screen={this.props.screen} style={this.props.style} />
                            : <div className="card-body"><h4 className="mt-5 mb-5" style={{ color: `${this.props.style.textColor}` }}>Careers will appear here.</h4></div>
                    }
                </div>
            </>
        );
    }
}

