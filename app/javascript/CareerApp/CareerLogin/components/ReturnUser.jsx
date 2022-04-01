import React from 'react';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../../../packs/apiRoot';
import User from '../../UserData';
import Login from './LoginButton';

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
            time: null,
            isMounted: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.showPassword = this.showPassword.bind(this)
        this.handleEnterKey = this.handleEnterKey.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleEnterKey(event) {
        if (event.keyCode == 13) {
            this.handleSubmit(event);
        }
    }

    handleSubmit(event) {
        let mounted = true;
        this.setState((state) => ({ isMounted: true }));
        event.preventDefault();
        const url = `${API_ROOT}/api/v1/sessions/login`;

        if (this.state.username && this.state.password) {
            fetch(url, {
                method: 'POST',
                headers: {
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.username,
                    password: this.state.password,
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    this.setState({ errorMessage: "Backend error: could not connect to controller. Please report this to system administrator." });
                })
                .then(user => {
                    if (this.state.isMounted && mounted) {
                        if (user.logged_in) {
                            const urlCount = `${API_ROOT}/api/v1/users/login_count/${user.user.id}`;
                            let date = new Date();
                            let month = date.getMonth() + 1;
                            let hour = date.getHours();
                            let currentDate = `${month.toString()}/${date.getDate().toString()}/${date.getFullYear().toString()} at ${hour.toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`
                            let startTime = Date.now()
                            this.setState({ time: date.getSeconds() })

                            fetch(urlCount, {
                                method: 'PUT',
                                headers: {
                                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                                    "Content-Type": 'application/json'
                                },
                                body: JSON.stringify({
                                    user: {
                                        num_logins: user.user.num_logins + 1,
                                        last_login: currentDate
                                    }
                                })
                            })
                                .then(response => {
                                    if (response.ok) {
                                        return response.json();
                                    }
                                })
                                .then(() => {
                                    this.setState({ isLoggedIn: 'true' });
                                    localStorage.setItem('userID', user.user.id);
                                    localStorage.setItem('user', user.user.name);
                                    localStorage.setItem('userBookmarks', user.user.bookmarks);
                                    localStorage.setItem('startTime', startTime);


                                    const currentUser = new User(user.user.id, user.user.name, user.user.bookmarks, startTime)
                                    //this.props.history.push({ pathname: '/main', state: { currentUser } });
                                    return () => { mounted = false };
                                })
                        }
                        else {
                            this.setState({ errorMessage: user.error[0] })
                        }
                    }
                });
        }

        if (this.state.username == '') {
            this.setState({ usernameError: "Please enter a username." })
        }

        if (this.state.password == '') {
            this.setState({ passwordError: "Please enter a password." })
        }
    }

    handleError(isEmpty) {
        if (isEmpty === true) {
            this.setState({ errorMessage: 'You must complete all fields before continuing.' })
        }
        else {
            this.setState({ errorMessage: '' })
        }
    }

    handleName(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    showPassword() {
        let inputType = this.state.inputType === "password" ? "text" : "password";
        this.setState({ inputType: inputType });
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    handleCancel() {
        this.props.setPage("1")
    }

    render() {
        return (
            <div className='row mb-4'>
                <form>
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
                    <input type="checkbox" id='passwordCheckbox' className="me-1" onChange={this.showPassword} />
                    <label htmlFor='passwordCheckbox'>Show Password</label>
                    <div className="container">
{
    //this can be turned into a component
}
                        
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <a>
                                    <button type='button' className='btn btn-lg btn-success' onClick={this.handleCancel}>Cancel</button>
                                </a>
                            </div>
                            <div className='d-flex col-6 justify-content-center row'>
                                <Login user={this.state.username} password={this.state.password} error={this.handleError} type="returnUser" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
