import React, { useState } from 'react';
import Launch from '../components/Launch';
import ReturnUser from '../components/ReturnUser';
import NewUser from '../components/NewUser';
import GuestUser from '../components/GuestUser';
import { Link } from 'react-router-dom';

const LaunchContainer = () => {
    const [page, setPage] = useState("1")
    /*if (window.innerWidth > 768) {

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

    else {}*/

    const changePage = () => {
        switch (page) {
            case "1":
                return <Launch setPage={setPage} />
            case "2":
                return <ReturnUser setPage={setPage} />
            case "3":
                return <NewUser setPage={setPage} />
            case "4":
                return <GuestUser setPage={setPage} />
        }
    }

    //refactor this so that they all are rendered on a single page
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className='jumbotron jumbotron-fluid bg-transparent'>
                <div className='container secondary-color'>
                    <div className="d-flex row">
                        <img src={require(`../../../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                    </div>
                    <hr />
                    <div className="container">
                        {
                            changePage()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaunchContainer