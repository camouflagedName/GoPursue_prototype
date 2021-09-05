import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className='jumbotron jumbotron-fluid bg-transparent'>
            <div className='container secondary-color'>
                <h1 className='display-4'>Uncover Education</h1>
                <p className='lead'>reimagine career exploration</p>
                <hr/>
                <Link to="/careerCard">
                    <button type='button' className='btn btn-lg'>Surprise Me!</button>
                </Link>
            </div>
        </div>
    </div>
)