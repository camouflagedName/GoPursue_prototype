import React, { useEffect, useState } from "react";
import Logo from '../../../../assets/logo/logo(cropped).jpg'

export function Sidebar(props) {
    const [windowSize, setWindowSize] = useState()

    const handleSelect = (event) => {
        const selected = event.currentTarget
        const id = selected.id
        const currentActive = document.querySelector(".active")

        if (selected !== currentActive) {
            selected.className += " active"
            currentActive.classList.remove("active")


            //remove "-sm" from id string
            props.changePage(id.replace("-sm", ''))
        }
    }
    
    //initialize state
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setWindowSize('sm')
            }
            else if (window.innerWidth >= 768) {
                setWindowSize('lg')
            }
        })

        let activeEl

        if (window.innerWidth < 768) {
            setWindowSize('sm')
            activeEl = document.querySelector("#Home-sm")
        }

        else {
            setWindowSize('lg')
            activeEl = document.querySelector("#Home")
        }

        activeEl.className += " active"

    }, [])

    //update active on window resize
    useEffect(() => {

        const active = document.querySelector(".active")
        active.classList.remove("active")

        if (windowSize === 'sm') {
            let resizeActiveID = `${active.id}-sm`
            let resizeActive = document.querySelector(`#${resizeActiveID}`)
            resizeActive.className += " active"
        }
        else {
            let resizeActiveID = active.id.replace("-sm", '')
            let resizeActive = document.querySelector(`#${resizeActiveID}`)
            resizeActive.className += " active"
        }

    }, [windowSize])

    //change active on resize

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
                <ul className="nav nav-pills flex-column mb-auto d-none d-md-block">
                    <li className="nav-item">
                        <a id="Home" className="nav-link link-dark" onClick={handleSelect}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a id="Users" className="nav-link link-dark" onClick={handleSelect}>Users</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="content" aria-expanded="false">
                            <span>Professionals</span>
                        </button>
                        <div className="list-group flex-column collapse multi-collapse" id="content">
                            <a id="ShowAll" className="list-group-item list-group-item-action" onClick={handleSelect}>Show All</a>
                            <a id="AddNew" className="list-group-item list-group-item-action" onClick={handleSelect}>Add New</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="justify-content-end">
                <ul className="nav nav-pills nav-flush flex-column mb-auto me-auto mb-lg-0 d-block d-md-none">
                    <li className="nav-item">
                        <a id="Home-sm" className="nav-link link-dark py-3 border-bottom" onClick={handleSelect} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi bi-house-fill fs-1"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a id="Users-sm" className="nav-link link-dark py-3 border-bottom" onClick={handleSelect} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi bi-people-fill fs-1"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link link-dark py-3 border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="content" aria-expanded="false">
                            <span><i className="bi bi-briefcase-fill fs-1"></i></span>
                        </button>
                        <div className="list-group flex-column collapse multi-collapse" id="content">
                            <a id="ShowAll-sm" className="list-group-item list-group-item-action" onClick={handleSelect}>All</a>
                            <a id="AddNew-sm" className="list-group-item list-group-item-action" onClick={handleSelect}>New</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}