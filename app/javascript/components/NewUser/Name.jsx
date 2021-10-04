import React from 'react';
import { Link } from 'react-router-dom';

export default class Name extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {name: ''}

        this.handleInput = this.handleInput.bind(this);
        this.handleHeader = this.handleHeader.bind(this);
    }

    handleInput(event) {
        this.props.input(event.target.value);
        this.setState({ name: event.target.value });
    }

    handleHeader() {
        this.props.setState('age', this.state.name);
        this.props.createPassword();
    }

    render()  {
        return(
            <>
                <h1 className='display-4 mb-4'>My preferred name is:</h1>
                <form className='needs-validation' noValidate>
                    <input className='mb-4 form-control' type="text" id="newUser" value={this.props.value} onChange={this.handleInput} required></input>
                    <div className='invalid-feedback'>
                        Input required.
                    </div>
                    <div className="container">
                        <div className='row mb-4'>
                            <button type='submit' className='btn btn-lg btn-success' onClick={this.handleHeader}>Next</button>
                        </div>
                        <div className='row mt-4'>
                            <Link to="/">
                                <button type='button' className='btn btn-lg btn-success'>Cancel</button>
                            </Link>
                        </div>
                    </div>     
                </form>
            </>
                            
        );

    }
}
