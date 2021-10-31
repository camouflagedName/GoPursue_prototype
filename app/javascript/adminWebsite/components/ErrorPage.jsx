import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.setState = { adminName: ''}
    }

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="col-9 p-2">
                                <h2 className='display-4'>You do not have access to this site.</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}