import React from 'react';
import Footer from '../Footer';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: { 
                picture: 'Breisch.jpg',
                name: 'Kathryn Breisch'
            } 
        };
    }

    render() {
        return (
            <div className="row vh-100">
                <div className="card border-0">
                    <div className="mt-auto mb-5 col-6 offset-3">
                        <img className="card-img-top rounded-circle" id="profilePic" src={require(`../../../assets/images/${this.state.profile.picture}`)} alt="profilePicture"/>
                        <h1 className="text-center">{this.state.profile.name}</h1>
                    </div>
                    <div className="card-body mt-5">
                        <div className="col-10 mx-auto mb-4 d-grid gap-2">
                            <button className="btn btn-light btn-lg btn-outline-dark">Personal Info</button>
                        </div>
                        <div className="col-10 mx-auto mb-4 d-grid gap-2">
                            <button className="btn btn-light btn-lg btn-outline-dark">Recent Activity</button>
                        </div>
                        <div className="col-10 mx-auto mb-4 d-grid gap-2">
                            <button className="btn btn-light btn-lg btn-outline-dark">Preferences</button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

