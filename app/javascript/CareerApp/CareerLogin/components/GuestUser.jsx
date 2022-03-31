import React from 'react'
import { API_ROOT } from '../../../packs/apiRoot'
import { useHistory } from 'react-router-dom'
import User from '../../UserData'
import Login from './LoginButton'

export default class GuestUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            selectValue: '',
            time: null,
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleEnterKey = this.handleEnterKey.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        goToCareerMain()

        if (this.state.userName === '') {
            this.setState({ errorMessage: 'Enter a username before continuing.' })
        }

        else {
            this.setState({ errorMessage: '' })
            let date = new Date();
            let month = date.getMonth() + 1
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
                    console.log(this.props)
                    this.history.push({ pathname: '/main', state: { currentUser } })
                    // this.props.history.push({ pathname: '/main', state: { currentUser } })
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

    handleCancel() {
        this.props.setPage("1")
    }

    handleError(isEmpty) {
        if (isEmpty === true) {
            this.setState({ errorMessage: 'Enter a username before continuing.' })
        }
        else {
            this.setState({ errorMessage: '' })
        }
    }

    render() {
        return (
            <div className='row mb-4'>
                <form>
                    <label htmlFor="adminName" className="form-label">Enter your name</label>
                    <div className='input-group'>
                        <input onChange={this.handleInput} onKeyPress={this.handleEnterKey} className='form-control' type='text' aria-label='Enter Name' />
                    </div>
                    <p>{this.state.errorMessage}</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <button type='button' className='btn btn-lg btn-success' onClick={this.handleCancel}>Back</button>
                        </div>
                        <div className='d-flex col-6 justify-content-center row'>
                            <Login user={this.state.userName} password="temp" error={this.handleError} type="newUser" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

