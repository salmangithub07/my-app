import React from 'react'
import { Link } from 'react-router-dom'

const Crumbs = (Props) => {
    return (
        <>
            <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/about-header.jpg')" }}>
                <div className="container position-relative d-flex flex-column align-items-center">

                    <h2>{Props.btitle}</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>{Props.pagelink}</li>
                    </ol>
                </div>
                
            </div>
        </>
    )
}

export default Crumbs