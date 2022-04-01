import React from 'react';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../../../../packs/apiRoot';
import loaderIcon from '../../../../../assets/icons/Eclipse_Loader.svg'

export default class ResponseWait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: loaderIcon
        }
        this.fetchVerification = this.fetchVerification.bind(this)
    }

    //pulls data from server
    async fetchVerification() {
        const url = `${API_ROOT}/api/v1/users/check_confirm_email/${this.props.email}`
        fetch(url)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
            .then(json => {
                if (json) {
                    this.props.changePage("name")
                }
            })
    }


    componentDidMount() {
        //fetch data every 10 seconds
        this.fetchInterval = setInterval(
            () => this.fetchVerification(),
            10000
        )
    }

    componentWillUnmount() {
        clearInterval(this.fetchInterval)
    }

    render() {
        return (
            <>
                <p className='mb-4'>{this.props.header}</p>
                {/*<p>If you do not receive an email, check your spam folder and the spelling of your email address.</p>*/}
                <div className="container">
                    <div className='d-flex row'>
                        <img src={this.state.icon} alt="loading..." />
                    </div>
                </div>
                <div className="container">
                    <div className='d-flex row justify-content-between'>
                        <div className="col-6">
                            <Link to="/">
                                {/* create an onclick event to delete user information */}
                                <button type='button' className='btn btn-lg btn-success'>  
                                    { /*                                     
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-octagon me-2" viewBox="0 0 16 16">
                                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg> 
                                        */}
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        {/*<div className="col-6">
                            <button className='btn btn-lg btn-primary'>
                                Resend Email
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    
                            </button>
                        </div>*/}
                    </div>
                </div>
            </>
        );
    }
}
