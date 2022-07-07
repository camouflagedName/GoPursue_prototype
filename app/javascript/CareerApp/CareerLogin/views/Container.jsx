import React, { useState } from 'react';
import LaunchLogin from '../components/LaunchLogin';
import ReturnUser from '../components/ReturnUser';
import NewUser from '../components/NewUser';
import GuestUser from '../components/GuestUser';

const LaunchContainer = () => {
    const [page, setPage] = useState("1")

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
                            page === "1" ? <LaunchLogin setPage={setPage} />
                                : page === "2" ? <ReturnUser setPage={setPage} />
                                    : page === "3" ? <NewUser setPage={setPage} />
                                        : page === "4" ? <GuestUser setPage={setPage} />
                                            : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaunchContainer

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