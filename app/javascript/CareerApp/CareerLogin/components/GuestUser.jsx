import React from 'react'
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

        this.handleInput = this.handleInput.bind(this)
        this.handleEnterKey = this.handleEnterKey.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleError = this.handleError.bind(this)
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
                            <Login user={this.state.userName} password="temp" error={this.handleError} type="guest" email="temp@gopursuecareer.com" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

