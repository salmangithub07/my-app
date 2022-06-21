import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Calltoaction from '../components/Calltoaction'
import Team from '../components/Team'
import Whyus from '../components/Whyus'

function About() {
  return (
    <>
    <main id="main">


{/*
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/about-header.jpg')"}}>
  <div className="container position-relative d-flex flex-column align-items-center">

    <h2>About</h2>
    <ol>
      <li><NavLink to="/">Home</NavLink></li>
      <li>About</li>
    </ol>

  </div>
</div>
  */}
  <Breadcrumbs />

<section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="row gy-4" data-aos="fade-up">
      <div className="col-lg-4">
        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8">
        <div className="content ps-lg-5">
          <h3>Voluptatem dignissimos provident quasi</h3>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
          <ul>
            <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>
<Whyus />

<Calltoaction />

<Team />


</main>
    </>
  )
}

export default About