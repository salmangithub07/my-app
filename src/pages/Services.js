import React from 'react'
import { NavLink } from 'react-router-dom'
import Servicelist from '../components/Servicelist'
import Testimonials from '../components/Testimonials'

function Services() {
  return (
    <>
    <main id="main">

{/* ======= Breadcrumbs ======= */}
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/services-header.jpg')"}}>
  <div className="container position-relative d-flex flex-column align-items-center">

    <h2>Services</h2>
    <ol>
      <li><NavLink to="/">Home</NavLink></li>
      <li>Services</li>
    </ol>

  </div>
</div>{/* End Breadcrumbs */}

<Servicelist />

{/* ======= Services Cards Section ======= */}
<section id="services-cards" className="services-cards">
  <div className="container" data-aos="fade-up">

    <div className="row gy-4">

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/cards-1.jpg)"}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Card Item */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/cards-2.jpg)"}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Card Item */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/cards-3.jpg)"}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Error beatae dolor inventore aut</h4>
                <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Card Item */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/cards-4.jpg)"}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Card Item */}

    </div>

  </div>
</section>{/* End Services Cards Section */}
<Testimonials />


</main>
    </>
  )
}

export default Services