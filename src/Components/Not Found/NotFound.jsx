import React, { Component } from 'react';
import "./notfound.css"

class NotFound extends Component {
    render() {
        return <>
            <section className='notFound'>
            <div className='bg-dark-subtle d-flex justify-content-center align-items-center text-center h-100'>
                <div ><h1>Not Found 404</h1>
                    <h2 className='pt-5'>There isn't any site pages with this path.</h2>
                </div>
            </div>
            </section>
        </>
    }
}

export default NotFound;