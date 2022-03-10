import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.changeDarkMode = this.changeDarkMode.bind(this);
    }

    changeDarkMode() {
        this.props.change;
    }

    render() {
        //console.log(localStorage.getItem('darkMode'))
        let onOff = this.props.style.darkMode === true ? "On" : "Off"
        //console.log(onOff)
        return (
            <>
                <div className="card-header bg-transparent text-center border-0 d-flex justify-content-center position-relative">
                    <div className="col-1 position-absolute top-50 start-0 translate-middle-y">
                        <a type="button" className="bg-transparent border-0" data-bs-toggle="offcanvas" href="#options" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                        </a>
                    </div>
                    <div className="col-6 mx-0">
                        <div className="d-flex row">
                            <img src={require(`../../assets/logo/${this.props.logo}`)} alt="logo" />
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-start" id="options" aria-labelledby="optionsLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title" id="optionsLabel">Preferences</h2>
                            <button type="button" className="btn-close text-rest" data-bs-dismiss="offcanvas" aria-label="close"></button>
                        </div>
                        <hr />
                        <div className="card mb-3 rounded-3 border border-3">
                            <div className="card-body">
                                <div className="offcanvas-body d-flex">
                                    <div className="col-1">
                                        <button type="button" className="bg-transparent border-0">
                                            {
                                                this.props.style.darkMode === true ?
                                                    <svg onClick={this.props.changeStyle} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-toggle-on" viewBox="0 0 16 16">
                                                        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                                    </svg>
                                                    :
                                                    <svg onClick={this.props.changeStyle} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
                                                        <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
                                                    </svg>
                                            }
                                        </button>
                                    </div>
                                    <div className="col-7">
                                        <h5 className="mb-0 align-bottom" style={{ display: "inline" }}>Darkmode: {onOff}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 rounded-3 border border-3">
                            <div className="card-body">
                                <div className="offcanvas-body d-flex">
                                    <div className="col-7">
                                        <h5 className="mb-0 align-bottom" style={{ display: "inline" }}>Text Size</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ backgroundColor: this.props.style.textColor }}/>
            </>

        );
    }
}

