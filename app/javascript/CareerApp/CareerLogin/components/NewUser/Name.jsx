import React from 'react';
import { Link } from 'react-router-dom';

export default class ResponseWait extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }

        this.handleInput = this.handleInput.bind(this)
        this.handleHeader = this.handleHeader.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleInput(event) {
        this.props.input(event.target.value);
        this.setState({ name: event.target.value });
    }

    handleHeader() {
        this.props.setState('password', this.state.name);
    }

    handleCancel() {
        this.props.setPage("1")
    }

    render() {
        return (
            <>
                <h1 className='display-4 mb-4'>Enter a username:</h1>
                <form className='needs-validation' onSubmit={this.handleHeader}>
                    <input className='mb-4 form-control' type="text" id="newUser_name" value={this.props.value} onChange={this.handleInput} required></input>
                    <div className="container">
                        <div className='d-flex row justify-content-between'>
                            <div className="col-6">
                                <button type='button' className='btn btn-lg btn-success' onClick={this.handleCancel}>Back</button>
                            </div>
                            <div className="col-6">
                                <button type='submit' className='btn btn-lg btn-primary'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>

        );

    }
}
