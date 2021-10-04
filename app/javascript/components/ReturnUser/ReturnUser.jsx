import React from 'react';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../../packs/apiRoot';

export default class ReturnUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            username: '',
            password: '',
            users: [], 
            isLoggedIn: 'false'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleSubmit() {
        const url = `${API_ROOT}/api/v1/sessions/login`;
        if(this.state.username && this.state.password) {
            fetch(url, {
                method: 'POST',
                headers: {
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                this.setState({ errorMessage: response.error });
            })
            .then(user => {
                if(user.logged_in){
                    this.setState( {isLoggedIn: 'true'});
                    console.log(user);
                    localStorage.setItem('userID', user.user.id);
                    localStorage.setItem('user', user.user.name);
                    localStorage.setItem('userBookmarks', user.user.bookmark);
                    this.props.history.push({ pathname: '/careercard' })
                }
            });
        }
    }

    handleName(event) {
        this.setState( {username: event.target.value} );
    }

    handlePassword(event) {
        this.setState( {password: event.target.value} );
    }

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                </svg>
                            </div>
                            <div className="col-10">
                                <h1 className='display-4 mb-0'>goPursue</h1>
                                <p className='lead mb-0'>reimagine career exploration</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="container">
                            <div className='row mb-4'>
                                <label className='form-label'>Name</label>
                                <input className='mb-4 form-control' type="text" value={this.props.value} onChange={this.handleName} required></input>
                                <div className='invalid-feedback'>
                                    Input required.
                                </div>
                                <label className='form-label'>Password</label>
                                <input className='mb-2 form-control' type="password" value={this.props.value} onChange={this.handlePassword} required></input>
                                <div className='invalid-feedback'>
                                    Input required.
                                </div>
                                <form>
                                    <input type="checkbox" id='passwordCheckbox'/>
                                    <label htmlFor='passwordCheckbox'> Show Password</label>
                                </form>
                                <div>
                                    <p className='mt-0 text-danger'>{this.state.errorMessage}</p>
                                </div>
                                <div className="container">
                                    <div className='row mt-5'>
                                        <button type='submit' className='btn btn-lg btn-success' onClick={this.handleSubmit}>Enter</button>
                                    </div>
                                    <div className='row mt-4'>
                                        <Link to="/">
                                            <button type='button' className='btn btn-lg btn-success'>Cancel</button>
                                        </Link>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
