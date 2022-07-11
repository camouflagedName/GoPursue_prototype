import React from "react";
import Logo from '../../../../assets/logo/logo(cropped).jpg'

export function Sidebar(props) {

    const handleSelect = (event) => {
        if(event.target.innerHTML !== "Professionals")
        props.changePage(event.target.innerHTML)
    }

    const handleSelectSmall = (event) => {
        props.changePage(event.currentTarget.id)
    }

    return (
        <div className="d-flex flex-column bg-light col-2 g-0 mt-1">
            <a className="d-flex align-items-center justify-content-center text-decoration-none link-dark">
                <img className='col-8' src={Logo} alt="logo" />
            </a>
            <hr />
            {/*<div className="navbar navbar-light navbar-expand-xl bg-light">
                <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>*/}
            <div className="justify-content-end">
                <ul className="nav nav-pills flex-column mb-auto d-none d-md-block" onClick={handleSelect}>
                    <li className="nav-item">
                        <a className="nav-link link-dark">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark">Users</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="content" aria-expanded="false">
                            <span>Professionals</span>
                        </button>
                        <div className="collapse" id="content">
                            <a className="text-muted text-decoration-none">Show All</a>
                        </div>
                        <div className="collapse" id="content">
                            <a className="text-muted text-decoration-none">Add New</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a to="/admin/dashboard" className="nav-link link-dark text-decoration-none">TBD</a>
                    </li>
                </ul>
            </div>
            <div className="justify-content-end">
                <ul className="nav nav-pills nav-flush flex-column mb-auto me-auto mb-lg-0 d-block d-md-none">
                    <li className="nav-item">
                        <a id="Home" className="nav-link active py-3 border-bottom" onClick={handleSelectSmall} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a id="Users" className="nav-link link-dark py-3 border-bottom" onClick={handleSelectSmall} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link link-dark py-3 border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="content" aria-expanded="false">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </span>
                        </button>
                        <div className="collapse" id="content">
                            <a id="Show All" className="text-muted text-decoration-none" onClick={handleSelectSmall}>Show All</a>
                        </div>
                        <div className="collapse" id="content">
                            <a id="Add New" className="text-muted text-decoration-none" onClick={handleSelectSmall}>Add New</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark py-3 border-bottom" onClick={handleSelectSmall} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
                                <path d="M3 4.075a.423.423 0 0 0 .43.44H4.9c.247 0 .442-.2.475-.445.159-1.17.962-2.022 2.393-2.022 1.222 0 2.342.611 2.342 2.082 0 1.132-.668 1.652-1.72 2.444-1.2.872-2.15 1.89-2.082 3.542l.005.386c.003.244.202.44.446.44h1.445c.247 0 .446-.2.446-.446v-.188c0-1.278.487-1.652 1.8-2.647 1.086-.826 2.217-1.743 2.217-3.667C12.667 1.301 10.393 0 7.903 0 5.645 0 3.17 1.053 3.001 4.075zm2.776 10.273c0 .95.758 1.652 1.8 1.652 1.085 0 1.832-.702 1.832-1.652 0-.985-.747-1.675-1.833-1.675-1.04 0-1.799.69-1.799 1.675z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}