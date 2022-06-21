import React from 'react'

function Servicelist() {
  return (
   <>
   {/* ======= Our Services Section ======= */}
   <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Services</h2>

        </div>

        <div className="row gy-5">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{color: "#f57813"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" style={{color: "#15a04a"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart" style={{color: "#d90769"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-binoculars" style={{color: "#15bfbc"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{color: "#1335f5"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" style={{color: "#f57813"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>{/* End Service Item */}

        </div>

      </div>
    </section>{/* End Our Services Section */}
   </>
  )
}

export default Servicelist