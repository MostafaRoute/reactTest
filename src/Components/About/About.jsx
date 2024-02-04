import React, { Component } from 'react';
import "./about.css"

class About extends Component {
    render() {
        return <>
                <section className='about text-white'>
                    <div className='d-flex justify-content-center align-items-end pt-5 h-50'>
                        <div>
                            <h2 className='text-uppercase fw-bold'>About Component</h2>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='line mt-3 bg-white me-2'></div>
                                <i className='fa-solid fa-star'></i>
                                <div className='line mt-3 bg-white ms-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4 w-75">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                                    files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                                    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    }
}

export default About;