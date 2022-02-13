import React from 'react';
import { API_ROOT } from '../packs/apiRoot';

export default class GuestUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameSelect = this.handleNameSelect.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `${API_ROOT}/api/v1/sessions/login`;

        fetch(url, {
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
            .then(user => {
                localStorage.setItem('userID', 1);
                localStorage.setItem('user', 'guest1');
                localStorage.setItem('userBookmarks', user.user.bookmark)
                this.props.history.push({ pathname: '/careercard' });
            })

    }

    handleNameSelect(event) {

    }

    handleEnterKey(event) {
        if (event.keyCode == 13) {
            this.handleSubmit(event);
        }
    }

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="d-flex align-items-center col-3 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                </svg>
                            </div>
                            <div className="col-9 p-2">
                                <h2 className='display-4'>goPursue</h2>
                                <h2 className='text-success'>Guest Access</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className='row mb-4'>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="adminName" className="form-label">Enter your name</label>
                                    <div className='input-group'>
                                        <input onChange={this.handleInput} onKeyPress={this.handleEnterKey} className='form-control' type='text' aria-label='Enter Name' placeholder='optional' />
                                    </div>
                                    <div className='row mt-5 col-4'>
                                        <input type='submit' className='btn btn-lg btn-success' value="Enter" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}