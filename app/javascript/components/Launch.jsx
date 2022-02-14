import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    console.log(window.innerWidth)
    if (window.innerWidth > 768) {

        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <img src={require(`../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <hr />
                        <p className='fs-4 text-primary'>This app is best viewed on a mobile or tablet sized screen. Please switch to a smaller screen before proceeding.</p>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <img src={require(`../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <hr />
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
    }
}