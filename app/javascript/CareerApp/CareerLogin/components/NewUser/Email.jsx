import React from 'react';
import { Link } from 'react-router-dom';

export default class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textBoxValue: this.props.value, isChecked: false, errorMsg: this.props.error }

        this.recaptchaRef = React.createRef()
        this.handleInput = this.handleInput.bind(this)
        this.verifyEmail = this.verifyEmail.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleAgeCheck = this.handleAgeCheck.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleSelect() {
        if (this.state.textBoxValue === "Enter email address") this.setState({ textBoxValue: "" })
    }

    handleBlur() {
        if (this.state.textBoxValue === '') {
            this.setState({ textBoxValue: "Enter email address", })
            if (this.state.isChecked) {
                this.setState({ errorMsg: '' })
            }
        }
    }

    handleInput(event) {
        this.props.input(event.target.value);
        this.setState({ textBoxValue: event.target.value });
    }

    verifyEmail(event) {
        event.preventDefault();

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.textBoxValue)) {
            if (this.state.isChecked) {
                this.props.verify(event, this.state.textBoxValue)
            }
            else {
                this.setState({ errorMsg: 'You must fill out all sections before continuing.' })
            }
        }
        else {
            this.setState({ errorMsg: 'Please provide a valid email address.' })
        }
    }

    handleAgeCheck() {
        let isChecked = this.state.isChecked ? false : true
        this.setState({ isChecked: isChecked })
        if (isChecked) {
            this.setState({ errorMsg: this.props.error })
        }
    }

    handleCancel() {
        this.props.setPage("1")
    }

    render() {
        console.log(`props: ${this.props.error} | state: ${this.state.errorMsg}`)
        return (
            <>
                <h1 className='display-4 mb-4'>Sign up for an account:</h1>
                <form className='needs-validation' onSubmit={this.verifyEmail}>
                    <input className='mb-4 form-control' type="text" value={this.state.textBoxValue} onClick={this.handleSelect} onBlur={this.handleBlur} onChange={this.handleInput} required></input>
                    <div className='invalid-feedback'>
                        Input required.
                    </div>
                    <input type="checkbox" id='ageCheck' className="mt-1 mb-3 me-2" onChange={this.handleAgeCheck} />
                    <label htmlFor='ageCheck'>I confirm I am 13 years or older.</label>
                    <div className="container">
                        <div className='d-flex row justify-content-between'>
                            <div className="col-6">
                                <a onClick={this.handleCancel}>
                                    <button type='button' className='btn btn-lg btn-success'>
                                        { /* 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-octagon me-2" viewBox="0 0 16 16">
                                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    */}
                                        Cancel
                                    </button>
                                </a>
                            </div>
                            <div className="col-6">
                                <button type='submit' className='btn btn-lg btn-primary'>
                                    Verify Email
                                    { /* 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="my-3 text-danger">{this.state.errorMsg ? this.state.errorMsg : this.props.error}</p>
                </form>
            </>

        );

    }
}
