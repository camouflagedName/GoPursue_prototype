import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export class CareerInfo extends React.Component {

    render() {
        return (
            <div className="vw-100 d-flex justify-content-center">
                <div className='jumbotron jumbotron-fluid bg-transparent'>
                    <div className='container secondary-color'>
                        <div className="d-flex row mt-3 mb-3">
                            <div className="d-flex col-1 pe-0 justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                </svg>
                            </div>
                            <div className="col-3 ps-0 formHeaders">
                                <h1 className='display-4 mb-0'>goPursue</h1>
                            </div>
                        </div>

                        <div className="card" id="formBG">
                            <div className="card-body">
                                <h2 className="card-title">Your Career Card</h2>
                                <hr/>
                                <p>
                                    Our mission is to help young people explore careers beyond their social circles and gain knowledge and confidence in pursuing those careers. That's why we've been working on a career exploration app focusing on unique jobs, featuring real people, and centering minority representation. 
                                </p>
                                <p>
                                    To accomplish this mission, we're envisioning a platform that enables students to see interesting people doing interesting jobs. That's where you come in!  You're invited to be part of our inaugural cohort of 50 featured professionals. Given your role, industry knowledge and personal background, we would like to feature you & your career on our social media accounts and future platform. (You can choose to represent any job you've done in the past--it doesn't have to be your current one.) 
                                </p>
                                <p>
                                    The total time commitment we're asking from you is ~15 minutes to fill out this form.  We'll turn your responses into a Career Card and share a draft with you for approval before we post it online.* That's all!  
                                </p>
                                <p>
                                    This is just the beginning, but we're so excited to be creating the best career exploration available.  Thank you for taking part!
                                </p>
                                <hr/>
                            </div>
                        </div>
                        <div className="fluid-container">
                            <h3 className="mt-5">The Basics</h3>
                            <div className="card mb-2 formBG">
                                <div className="card-body d-flex justify-content-center">
                                    <div className="col-10">
                                        <label className="card-title form-label" for="title">What is your job title?</label>
                                        <input className="form-control" type="text" id="title" aria-label="job title input"/>
                                        <label className="form-label">Describe your job (in high-schooler-friendly words)</label>
                                        <textarea className="form-control" type="text" placeholder="3 sentences or less" aria-label="description input"/>
                                        <label className="form-label">What is your favorite part of your job?</label>
                                        <textarea className="form-control" type="text" placeholder="3 sentences or less" aria-label="favorite input"/>
                                        <label className="form-label">What advice would you give to a high schooler who is interested in a career similar to yours?</label>
                                        <textarea className="form-control" type="text" placeholder="3 sentences or less" aria-label="advice input"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fluid-container">
                            <h3 className="mt-5">Work Environment (3 questions)</h3>
                            <div className="card mb-2 formBG">
                                <div className="card-body d-flex justify-content-center">
                                    <div className="col-10">
                                        <label className="card-title form-label" for="title">Describe your work environment/location pre-COVID (e.g., office, lab, hospital, studio, school, build site, outdoors, etc)</label>
                                        <input className="form-control" type="text" id="title" aria-label="job title input"/>
                                        <label className="form-label">Which best describes your typical interactions with others pre-COVID?</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="interactions1" />
                                            <label className="form-check-label" for="interactions1">a few close teammates every day</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="interactions2" />
                                            <label className="form-check-label" for="interactions2">several teammates and new people every day</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="interactions3" />
                                            <label className="form-check-label" for="interactions3">50+ people every day</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="interactions4" />
                                            <label className="form-check-label" for="interactions4">Other</label>
                                        </div>
                                        <label className="form-label">Which describes your on-the-job physical activity pre-COVID?</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="physical1" />
                                            <label className="form-check-label" for="physical1">Low physical activity; sitting most of the day</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="physical2" />
                                            <label className="form-check-label" for="physical2">Moderate physical activity; combination of sitting and standing</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="physical3" />
                                            <label className="form-check-label" for="physical3">High physical activity; standing/moving most of the day</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="physical4" />
                                            <label className="form-check-label" for="physical4">Extreme physical activity; constant exertion required (think warehouse worker, athlete, professional dancer)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="physical5" />
                                            <label className="form-check-label" for="physical5">Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fluid-container">
                            <h3 className="mt-5">Qualifications and Money (3 questions)</h3>
                            <div className="card mb-2 formBG">
                                <div className="card-body d-flex justify-content-center">
                                    <div className="col-10">
                                        <p className="card-title" for="title">With 10 years of relevant experience, what might someone in your role expect to make annually? If paid hourly, specify a rate in the "other" box</p>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check1" />
                                            <label className="form-check-label" for="check1">$1k-30k</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check2" />
                                            <label className="form-check-label" for="check3">$31k-60k</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check3" />
                                            <label className="form-check-label" for="check3">$61k-90k</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check4" />
                                            <label className="form-check-label" for="check4">$91k-120k</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check5" />
                                            <label className="form-check-label" for="check5">$121k-200k</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check6" />
                                            <label className="form-check-label" for="check6">$200k +</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check7" />
                                            <label className="form-check-label" for="check7">Other</label>
                                        </div>

                                        <p className="card-title" for="title">What were your majors in undergraduate and graduate school, if applicable?</p>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="major1" />
                                            <label className="form-check-label" for="major1">Associate's Degree</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check2" />
                                            <label className="form-check-label" for="check3">Bachelor's Degree</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check3" />
                                            <label className="form-check-label" for="check3">Master's Degree</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check4" />
                                            <label className="form-check-label" for="check4">Doctoral Degree</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check5" />
                                            <label className="form-check-label" for="check5">Professional Degree</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check6" />
                                            <label className="form-check-label" for="check6">$200k +</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="check7" />
                                            <label className="form-check-label" for="check7">Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='row mb-4'>
                                <div className="offset-2">
                                    <Link>
                                        <button type='button' className='btn btn-lg btn-success'>Submit</button>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}