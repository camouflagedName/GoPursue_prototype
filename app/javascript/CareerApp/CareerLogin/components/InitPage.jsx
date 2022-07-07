import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const InitPage = (props) => {
    const [page, setPage] = useState()

    const handleClick = () => {

        fetch('/admin')
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <img src={require(`../../../../assets/logo/logo(cropped).jpg`)} alt="logo" />
                        </div>
                        <hr />
                        <div className='row mb-4 col-8 offset-2'>
                            <Link id="2" type='button' className='btn btn-lg btn-success rounded-pill' to='/login'>Demo App</Link>
                        </div>
                        <div className='row mb-4 col-8 offset-2'>
                            <Link id="3" type='button' className='btn btn-lg btn-success rounded-pill' to='/admin'>Demo Admin Portal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitPage