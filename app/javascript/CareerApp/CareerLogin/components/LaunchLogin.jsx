import React, {useState} from 'react';


const LaunchLogin = (props) => {
    const [page, setPage] = useState()

    const handleClick = (e) => {
        props.setPage(e.target.id)
    }

    return (
        <>
            <div className='row mb-4 col-8 offset-2'>
                <button id="2" type='button' className='btn btn-lg btn-success rounded-pill' onClick={handleClick}>Returning User</button>
            </div>
            <div className='row mb-4 col-8 offset-2'>
                <button type='button' className='btn btn-lg btn-success rounded-pill' onClick={handleClick} disabled>New User</button>
            </div>
            <div className='row mb-4 col-8 offset-2'>
                <button id="4" type='button' className='btn btn-lg btn-success rounded-pill' onClick={handleClick}>Guest</button>
            </div>
        </>
    )
}

export default LaunchLogin