import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameSelect = this.handleNameSelect.bind(this);
    }

    handleSubmit() {
        this.props.history.push({ pathname: '/admin/dashboard'})
    }

    handleNameSelect(event) {
        localStorage.setItem('admin', event.target.value);
        this.setState({ selectValue: event.target.value });
    }

    render() {
        return (
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row">
                            <div className="d-flex align-items-center col-3 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                </svg>
                            </div>
                            <div className="col-9 p-2">
                                <h2 className='display-4'>goPursue</h2>
                                <h2 className='text-success'>Admin Portal</h2>
                            </div>
                        </div>
                        <hr/>
                        <div className="container">
                            <div className='row mb-4'>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="adminName" className="form-label">Admin Name</label>
                                    <select className="form-select" id="adminName" onChange={this.handleNameSelect} value={this.state.selectValue}>
                                        <option value=''>Select your name...</option>
                                        <option value="Kathryn">Kathryn Breisch</option>
                                        <option value="Michael">Michael Hazeltine</option>
                                    </select>
                                    <button type='submit' className='btn btn-lg btn-success mt-3' data-bs-toggle="collapse">Log in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}