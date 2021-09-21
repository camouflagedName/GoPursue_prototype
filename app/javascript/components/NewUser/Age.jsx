import React from 'react';
import { Link } from 'react-router-dom';

export default class NewUserAge extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render()  {
        return(
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="col-12">
                                <h1 className='display-4 mb-4'>I am</h1>
                                <input className='mb-4' type="text" id="newUser" value={this.state.value} required></input>
                                <h1 className='display-4 mb-4'>years old</h1>
                            </div>
                        </div>
                        <Link to="/home">
                            <button type='button' className='btn btn-lg btn-success'>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        );

    }
}
