import React from 'react';
import Footer from '../Footer';
import { API_ROOT } from '../../packs/apiRoot';
import { Link } from 'react-router-dom';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.location.state ? props.location.state.id : localStorage.getItem('userID'),
            picture: '',
            name: props.location.state ? props.location.state.name : localStorage.getItem('user')
        };
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        const url = `${API_ROOT}/api/v1/users/show/${this.state.id}`;
    }

    logout() {
        localStorage.clear();

    }

    render() {
        return (
            <div className="row vh-100">
                <div className="card border-0">
                    <div className="mt-auto mb-5 col-6 offset-3 justify-content-center text-center">
                        {/*<img className="card-img-top rounded-circle" id="profilePic" src={require(`../../../assets/images/${this.state.picture}`)} alt="profilePicture"/> */}
                        <i id="profileIcon" className="bi bi-emoji-sunglasses-fill"></i>
                        <h1 className="text-center">{this.state.name}</h1>
                    </div>
                    <div className="card-body mt-5">
                        <div className="col-10 mx-auto mb-4 d-grid gap-2 justify-content-center">
                            <Link to="/">
                                <button className="btn btn-light btn-lg btn-outline-dark" onClick={this.logout} >Log Out</button>
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
                    <Footer />
                </div>
            </div>
        );
    }
}

