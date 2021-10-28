import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.changeDarkMode = this.changeDarkMode.bind(this);
    }

    changeDarkMode(element){
        console.log(element)

    }

    render() {
        return (
            <div className="card-header bg-transparent text-center border-0 d-flex">
                <div className="col-1">
                    <a type="button" className="bg-transparent border-0" data-bs-toggle="offcanvas" href="#options" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </a>
                </div>
                <div className="col-11 mx-0">
                    <h1 className="mb-0 align-bottom" style={{display: "inline"}}>goPursue</h1>
                </div>

                <div className="offcanvas offcanvas-start" id="options" aria-labelledby="optionsLabel">
                    <div className="offcanvas-header">
                        <h2 className="offcanvas-title" id="optionsLabel">Options</h2>
                        <button type="button" className="btn-close text-rest" data-bs-dismiss="offcanvas" aria-label="close"></button>
                    </div>
                    <div className="offcanvas-body d-flex">
                        <div className="col-1">
                            <button type="button" className="bg-transparent border-0">
                                <svg onClick={this.changeDarkMode(this)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
                                    <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="col-7">
                            <h5 className="mb-0 align-bottom" style={{display: "inline"}}>Darkmode On/Off</h5>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

