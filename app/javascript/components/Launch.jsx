import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className='jumbotron jumbotron-fluid bg-transparent'>
            <div className='container secondary-color'>
                <div className="d-flex row">
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg>
                    </div>
                    <div className="col-10">
                        <h1 className='display-4 mb-0'>goPursue</h1>
                        <p className='lead mb-0'>reimagine career exploration</p>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className='row mb-4'>
                        <Link to="/returnuser">
                            <button type='button' className='btn btn-lg btn-success' disabled>Returning User</button>
                        </Link> 
                    </div>
                    <div className='row mt-4 disabled'>
                        <Link to="/newuser" >
                            <button type='button' className='btn btn-lg btn-success' disabled>New User</button>
                        </Link>
                    </div>
                    <div className='row mt-4'>
                        <Link to="/guest">
                            <button type='button' className='btn btn-lg btn-success'>Guest</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)