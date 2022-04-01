import React from 'react';
import Footer from '../Footer';
import { API_ROOT } from '../../packs/apiRoot';
import { Link } from 'react-router-dom';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.location.state ? props.location.state.id : localStorage.getItem('userID'),
            picture: '',
            name: props.location.state ? props.location.state.name : localStorage.getItem('user'),
            time: localStorage.getItem('startTime')
        };
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        const url = `${API_ROOT}/api/v1/users/show/${this.state.userID}`;
    }

    logout() {
        localStorage.clear();
        return <TotalTime time={this.state.time} user={this.state.userID} />
    }

    render() {
        if (!this.state.userID) {
            window.location.replace("/");
            return <></>
        }
        return (
            <>
                <div className="card-header bg-transparent text-center border-0 d-flex justify-content-center">
                    <div className="col-6 mx-0">
                        <div className="d-flex row">
                            <img src={require(`../../../assets/logo/logo(title_only).jpg`)} alt="logo" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mt-auto mb-5 col-6 offset-3 justify-content-center text-center">
                    {/*<img className="card-img-top rounded-circle" id="profilePic" src={require(`../../../assets/images/${this.state.picture}`)} alt="profilePicture"/> */}
                    <i id="profileIcon" className="bi bi-emoji-sunglasses-fill"></i>
                    <h1 className="text-center">{this.state.name}</h1>
                </div>
                <div className="card-body mt-5">
                    <div className="col-10 mx-auto mb-4 d-grid gap-2 justify-content-center">
                        <Link to="/">
                            <button className="btn btn-light btn-lg btn-outline-dark" onClick={this.logout}>Log Out</button>
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
        );
    }
}

