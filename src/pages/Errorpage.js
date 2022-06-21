import React from 'react'
import { NavLink } from 'react-router-dom'

function Errorpage() {
  return (
   <>
    <main id="main">

{/* ======= Breadcrumbs ======= */}
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/services-header.jpg')"}}>
  <div className="container position-relative d-flex flex-column align-items-center">

    <h2>404 Page Not Found</h2>
    <ol>
      <li><NavLink to="/">Home</NavLink></li>
      <li>404</li>
    </ol>

  </div>
</div>{/* End Breadcrumbs */}
</main>
   </>
  )
}

export default Errorpage