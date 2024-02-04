import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render() {
        return <>

            <footer className='text-white text-center pt-3'>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-4">
                            <p className='text-white text-uppercase fw-bolder fs-3 '>Location</p>
                            <p >2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <p className='text-white text-uppercase fw-bold fs-3'>Around the web</p>
                            <div className=' d-flex justify-content-center align-items-center'>
                                <div className='socialIcons me-2 rounded rounded-5 border border-white border-2 d-flex justify-content-center align-items-center'>
                                    <i className='fa-brands fa-facebook-f fs-6'></i>
                                </div>
                                <div className='socialIcons me-2 rounded rounded-5 border border-white border-2 d-flex justify-content-center align-items-center'>
                                    <i className="fa-brands fa-twitter fs-6"></i>
                                </div>
                                <div className='socialIcons me-2 rounded rounded-5 border border-white border-2 d-flex justify-content-center align-items-center'>
                                    <i className='fa-brands fa-linkedin-in fs-6'></i>
                                </div>
                                <div className='socialIcons me-2 rounded rounded-5 border border-white border-2 d-flex justify-content-center align-items-center'>
                                    <i className="fa-solid fa-globe mx-1 icon fs-6"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className='text-white text-uppercase fw-bold fs-3'>About freelancer</p>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className="copyright pt-3 d-flex justify-content-center align-items-center">
                        <p>Copyright© Your Website 2021</p>
                    </div>
            </footer>



        </>
    }
}

export default Footer;