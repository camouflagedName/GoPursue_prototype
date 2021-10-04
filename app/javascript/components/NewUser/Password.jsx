import React from 'react';
import { Link } from 'react-router-dom';

export default class Password extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {password: ''}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addUser();
    }

    render()  {
        return(
            <>
                <h1 className='display-4 mb-4'>Your password is</h1>
                <input className='mb-4 form-control' type="text" value={this.props.value} aria-label='readonly input' readOnly></input>
                <div className="container">
                    <div className='row mb-4'>
                        <button type='button' className='btn btn-lg btn-success' onClick={this.handleClick}>Next</button>
                    </div>
                    <div className='row mt-4'>
                        <Link to="/">
                            <button type='button' className='btn btn-lg btn-success'>Cancel</button>
                        </Link>
                    </div>
                </div>     

            </>
                            
        );

    }
}
