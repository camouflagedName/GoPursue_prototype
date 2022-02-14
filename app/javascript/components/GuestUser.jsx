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
                            <img src={require(`../../assets/logo/logo(cropped).jpg`)} alt="logo" />
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