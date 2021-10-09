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
            isLoggedIn: 'false',
            inputType: "password",
            usernameError: '',
            passwordError: '',
            isMounted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleEnterKey(event) {
        if(event.keyCode == 13) {
            this.handleSubmit(event);
        }
    }

    handleSubmit(event) {
        this.setState({ isMounted: true });
        event.preventDefault();
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
                this.setState({ errorMessage: "Backend error: could not connect to controller. Please report this to system administrator." });
            })
            .then(user => {
                if(this.state.isMounted) {
                    if(user.logged_in){
                        this.setState( {isLoggedIn: 'true'});
                        localStorage.setItem('userID', user.user.id);
                        localStorage.setItem('user', user.user.name);
                        localStorage.setItem('userBookmarks', user.user.bookmark);
                        this.props.history.push({ pathname: '/careercard' })
                    }
                    else {
                        this.setState({ errorMessage: user.error[0]})
                    }
                }
            });
        }
        if(this.state.username == '') {
            this.setState({ usernameError: "Please enter a username."})
        }

        if(this.state.password == '') {
            this.setState({ passwordError: "Please enter a password."})
        }
    }

    handleName(event) {
        this.setState( {username: event.target.value} );
    }

    handlePassword(event) {
        this.setState( {password: event.target.value} );
    }

    showPassword() {
        let inputType = this.state.inputType === "password" ? "text" : "password";
        this.setState({ inputType: inputType });
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
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
                                <form onSubmit={this.handleSubmit}>
                                    <label className='form-label'>Name</label>
                                    <input className='mb-4 form-control' type="text" value={this.props.value} onChange={this.handleName} onKeyUp={this.handleEnterKey} required></input>
                                    <div className='invalid-feedback'>
                                        {this.state.usernameError}
                                    </div>
                                    <label className='form-label'>Password</label>
                                    <input className='mb-2 form-control' type={this.state.inputType} value={this.props.value} onChange={this.handlePassword} onKeyUp={this.handleEnterKey} required></input>
                                    <div className='invalid-feedback'>
                                        {this.state.passwordError}
                                    </div>
                                    <div>
                                        <p className='mt-0 text-danger'>{this.state.errorMessage}</p>
                                    </div>
                                    <input type="checkbox" id='passwordCheckbox' className="me-1" onChange={this.showPassword}/>
                                    <label htmlFor='passwordCheckbox'>Show Password</label>
                                    <div className="container">
                                        <div className='row mt-5'>
                                            <input type='submit' className='btn btn-lg btn-success' value="Enter"/>
                                        </div>
                                        <div className='row mt-4'>
                                            <Link to="/">
                                                <button type='button' className='btn btn-lg btn-success'>Cancel</button>
                                            </Link>
                                        </div>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
