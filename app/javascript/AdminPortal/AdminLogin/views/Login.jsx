import React from 'react';
import Logo from '../../../../assets/logo/logo(cropped).jpg'

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
        this.props.history.push({ pathname: '/admin/portal' })
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
                            <img className='col-8 offset-2 mb-5' src={Logo} alt="logo" />
                            <h1 className='text-success text-center'>Admin Portal</h1>
                        </div>
                        <hr />
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