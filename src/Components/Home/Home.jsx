import React, { Component } from 'react';
import "./home.css"
import { ReactComponent as Logo } from "./kidSmiling.svg"


class Home extends Component {
    render() {
        return <>
                <section className='home text-white h-75 pb-5'>
                    <div className='heighty d-flex justify-content-center align-items-end pt-5'>
                        <div>
                            <Logo className="w-75 mx-auto d-block mb-4" />
                            <h2 className='text-uppercase fw-bold text-center'>Start framework</h2>
                            <div className='d-flex justify-content-center align-items-center mb-3'>
                                <div className='line mt-3 bg-white me-2'></div>
                                <i className='fa-solid fa-star'></i>
                                <div className='line mt-3 bg-white ms-2'></div>
                            </div>
                            <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </section>
        </>
    }
}

export default Home;