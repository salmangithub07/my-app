import React from 'react'
import { NavLink } from 'react-router-dom'
import Team from '../components/Team'

function TeamP() {
  return (
    <>
    <main id="main">
{/* ======= Breadcrumbs ======= */}
<div class="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/team-header.jpg')"}}>
  <div class="container position-relative d-flex flex-column align-items-center">

    <h2>Team</h2>
    <ol>
      <li><NavLink to="/">Home</NavLink></li>
      <li>Team</li>
    </ol>

  </div>
</div>{/* End Breadcrumbs */}
<Team />
</main>
    </>
  )
}

export default TeamP