import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Results } from './Results';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            careers: [],
            userID: localStorage.getItem('userID'),
            careerMatch: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.search = this.search.bind(this);
    }

    handleInput(event) {
        this.setState({ search: event.target.value })
    }

    search(term) {
        const url = `${API_ROOT}/api/v1/careers/find/${term}`;
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
            this.setState({ careerMatch: response })
        });
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
            this.setState({ careers: json.bookmarks })
        });
    }

    render() {
        const eachCareer = this.state.allCareers.map((career, index) => (
            (() => {
                alert("hello")
                console.log(career.hashtag.includes(this.state.search));
                if(career.hashtag.includes(this.state.search)) {
                    return <Link key={index} className='text-decoration-none text-dark'
                        to={{
                            pathname: "/careercard",
                            state: {
                                id: career.id,
                                title: career.title,
                                name: career.name,
                                favorite: career.favorite,
                                skills: career.skills,
                                advice: career.advice,
                                education: career.education,
                                pay: career.pay,
                                environment: career.environment,
                                image: career.image,
                                bookmark: true,
                                hashtags: career.hashtag,
                                bookmarkArray: this.state.careers
                            }
                        }}>
                        <div key={index} className='offset-3 mb-4'>
                            <div className="card w-25 text-center">
                                <img src={require(`../../../assets/images/${career.image}`)} className="card-img-top" alt={`Picture of ${career.image}`}/>
                                <div className='card-body'>
                                    <p className='card-title fs-4'>{career.title}</p>
                                </div>
                            </div>  
                        </div>
                    </Link>
                }
            })
        ));
        return (
            <>
                <div className="row">
                    <form className='d-flex'>
                        <div className='input-group'>
                            <input onChange={this.handleInput} className='form-control' type='search' placeholder='enter a keyword' aria-label='Search'/>
                                <button onClick={this.search} className='btn btn-outline-secondary' type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                                </button>
                        </div>
                    </form>
                    <SearchBar search={this.search}/>
                    <Results results={this.state.careerMatch}/>
                </div>
                <div className="row">

                </div>
            </>    
        );
    }
}

