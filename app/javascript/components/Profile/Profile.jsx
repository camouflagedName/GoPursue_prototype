import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import totalTime from '../TotalTime';

export default function Profile(props) {
    let user = props.userData
    const [picture, setPicture] = useState(null)
    const [userName, setUserName] = useState(user.initialUserName) //this loads as previous data and does not load updated; perhaps pass as props from main?

    const logout = () => {
        totalTime(user.appStartTime, user.userID)
        localStorage.clear()
    }
    console.log(user)
 
    return (
        <>
            <div className="mt-auto mb-5 col-6 offset-3 justify-content-center text-center">
                {/*<img className="card-img-top rounded-circle" id="profilePic" src={require(`../../../assets/images/${this.state.picture}`)} alt="profilePicture"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill={props.style.profile.color} className={`bi ${props.style.profile.icon}`} viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
                </svg>
                <h1 className="text-center" style={{ color: props.style.textColor }}>{user.initialUserName}</h1>
            </div>
            <div className="card-body mt-5">
                <div className="col-10 mx-auto mb-4 d-grid gap-2 justify-content-center">
                    <Link to="/">
                        <button className="btn btn-primary btn-lg btn-outline-dark" onClick={logout} style={{ color: 'white' }}>Log Out</button>
                    </Link>
                </div>
                {/*

                        }
                        <div className="col-10 mx-auto mb-4 d-grid gap-2">
                            <button className="btn btn-light btn-lg btn-outline-dark">Recent Activity</button>
                        </div>
                        <div className="col-10 mx-auto mb-4 d-grid gap-2">
                            <button className="btn btn-light btn-lg btn-outline-dark">Preferences</button>
                        </div>
                    */}
            </div>
        </>
    )
}

