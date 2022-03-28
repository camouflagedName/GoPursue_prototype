import React from 'react'
import { API_ROOT } from '../../packs/apiRoot'
import { Link } from 'react-router-dom'
import User from '../UserData'

export default class GuestUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            selectValue: '',
            time: null,
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.userName === '') {
            this.setState({ errorMessage: 'Enter a username before continuing.' })
        }

        else {
            this.setState({ errorMessage: '' })
            let date = new Date();
            let month = date.getMonth() + 1;
            let hour = date.getHours();
            let currentDate = `${month.toString()}/${date.getDate().toString()}/${date.getFullYear().toString()} at ${hour.toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`
            let startTime = Date.now()
            this.setState({ time: date.getSeconds() })

            const url = `${API_ROOT}/api/v1/users/create_guest`;

            fetch(url, {
                method: 'POST',
                headers: {
                    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: this.state.userName,
                        age: 0,
                        password: 'welcome',
                        password_confirmation: 'welcome',
                        created_on: currentDate,
                        num_logins: 1
                    }
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Bad network response.");
                })
                .then(res => {
                    const currentUser = new User(res.id, res.name, [], startTime)
                    localStorage.setItem('userID', res.id)
                    localStorage.setItem('user', res.name)
                    localStorage.setItem('startTime', startTime)
                    this.props.history.push({ pathname: '/main', state: { currentUser } })
                })
                .catch(error => console.log(error.message))
        }
    }

    handleInput(event) {
        this.setState({ userName: event.target.value })
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
                            <img src={require(`../../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <hr />
                        <div className="container">
                            <div className='row mb-4'>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="adminName" className="form-label">Enter your name</label>
                                    <div className='input-group'>
                                        <input onChange={this.handleInput} onKeyPress={this.handleEnterKey} className='form-control' type='text' aria-label='Enter Name' />
                                    </div>
                                    <p>{this.state.errorMessage}</p>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}