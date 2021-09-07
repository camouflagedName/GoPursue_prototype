import React from 'react';
import { API_ROOT } from '../../packs/apiRoot';
import Footer from '../Footer';

export default class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOff: true,
            careers: []
        };
    }


    componentDidMount() {
        const url = `${API_ROOT}/api/v1/careers/index`;

        fetch(url)
        .then(response => {
            if (response.ok) {       
                return response.json();
            }
            throw new Error("Bad network response.");
        })
        .then(response => {

            this.setState({ 
                careers: response
            })

            
        });
        
    }

    render() {
        let careerData = this.state.careers;
        console.log(this.state.careers[1]);

        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">For You  |  Bookmarks</h1>
                    </div>
                    <div className="row">

                    </div>
                    <div className="card border-0">
                        <div className="mt-auto">
                        </div>
                        <div className="card-header border-0 bg-transparent">
                            <h5 className="card-title">{this.state.careers.title}</h5>
                        </div>
                    </div>

                        <Footer />

                </div>
            </>    
        );
    }
}

