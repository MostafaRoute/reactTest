import React, { Component } from 'react';
import "./portfolio.css"



class Portfolio extends Component {

    render() {
        return <>
            <section className='portfolio pb-4'>
                <div className='d-flex justify-content-center align-items-end mt-5 '>
                    <div>
                        <h2 className='text-uppercase fw-bold'>Portfolio Component</h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='line mt-3 me-2'></div>
                            <i className='fa-solid fa-star'></i>
                            <div className='line mt-3 ms-2'></div>
                        </div>
                    </div>
                </div>
                <div className="container my-4 w-75">
                    <div className="row gy-5">
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal1" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/house.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal2" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/cake.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal3" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/caravan.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal1" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/house.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal2" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/cake.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='mainImg position-relative'>
                                <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal3" className='layer position-absolute rounded rounded-3 d-flex justify-content-center align-items-lg-center'>
                                    <i className='fa-solid fa-plus fs-1 text-white'></i>
                                </figcaption>
                                <img src={require("./imgs/caravan.png")} alt="" className='img-fluid rounded rounded-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body d-flex align-items-center justify-content-center p-0">
                            <img src={require("./imgs/house.png")} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body d-flex align-items-center justify-content-center p-0">
                            <img src={require("./imgs/cake.png")} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body d-flex align-items-center justify-content-center p-0">
                            <img src={require("./imgs/caravan.png")} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Portfolio;