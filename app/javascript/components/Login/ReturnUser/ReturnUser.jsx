import React from 'react';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../../../packs/apiRoot';
import User from '../../UserData';

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
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
                                    localStorage.setItem('startTime', date);


                                    const currentUser = new User(user.user.id, user.user.name, user.user.bookmarks, this.state.time)
                                    this.props.history.push({ pathname: '/main', state: { currentUser } });
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

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <img src={require(`../../../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <hr />
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
                                    <input type="checkbox" id='passwordCheckbox' className="me-1" onChange={this.showPassword} />
                                    <label htmlFor='passwordCheckbox'>Show Password</label>
                                    <div className="container">
                                        <div className='row mt-5'>
                                            <div className='col-6'>
                                                <Link to="/">
                                                    <button type='button' className='btn btn-lg btn-success'>Cancel</button>
                                                </Link>
                                            </div>
                                            <div className='col-6'>
                                                <input type='submit' className='btn btn-lg btn-primary' value="Enter" />
                                            </div>
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