import React from 'react';
import Login from '../LoginButton';

export default class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '' }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleSubmit(event) {
        this.props.addUser(event);
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
            <>
                <h1 className='display-4 mb-4'>Your password is</h1>
                <form>
                    <input className='mb-4 form-control' type="text" value={this.props.loginData.password} aria-label='readonly input' readOnly></input> 
                    <div className="container">
                        <div className='d-flex row justify-content-between'>
                            <div className="col-6">
                                <button type='button' className='btn btn-lg btn-success' onClick={this.handleCancel}>Back</button>
                            </div>
                            <div className='d-flex col-6 justify-content-center row'>
                                <Login user={this.props.loginData.name} password={this.props.loginData.password} email={this.props.loginData.email} error={this.handleError} type="newUser" />
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}
