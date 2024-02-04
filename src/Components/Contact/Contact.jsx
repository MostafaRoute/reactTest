import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {
    render() {
        return <>
            <section className='contact pb-5'>
                <div className='d-flex justify-content-center align-items-end mt-5'>
                    <div>
                        <h2 className='text-uppercase fw-bold'>Contact Section</h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='line mt-3 me-2'></div>
                            <i className='fa-solid fa-star'></i>
                            <div className='line mt-3 ms-2'></div>
                        </div>
                    </div>
                </div>
                <form className='mt-5'>
                    <div className="container w-50">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingUserName" placeholder="Name" />
                            <label htmlFor="floatingUserName"  className='text-muted fw-medium'>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingUserAge" placeholder="Age" />
                            <label htmlFor="floatingUserAge" className=' text-muted fw-medium'>Age</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className=' text-muted fw-medium'>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword" className=' text-muted fw-medium'>Password</label>
                        </div>
                        <button className='mt-4 text-dark btn'>Send Message</button>
                    </div>
                </form>
            </section>
        </>
    }
}

export default Contact;