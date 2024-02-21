import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="hero_area">
    {/* <!-- header section strats --> */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>
            Tecraki Technology Solutions Pvt Ltd.
            </span>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="about.html"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="job.html">Jobs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="freelancer.html">Freelancers</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/adminlogin">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Login
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </Link>
              </li>
              {/* <form className="form-inline">
                <button className="btn   nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
    </div>

    {/* <!-- end header section --> */}
    
  
{/* 
    <!-- about section --> */}

<section className="about_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="detail-box">
          <div className="heading_container">
            <h2>
            Employee Management System for Streamlined Operations
            </h2>
          </div>
          <p>
          Welcome to Tecraki, Unlock a new era of streamlined employee management..

       Employee Management System, offering a centralized database for employee details. Easily access and update information related to each team member, from personal details and contact information to professional qualifications and performance history.
          </p>
          <Link to="#">
            Read More
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="img-box">
          <img src="images/about-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end about section --> */}
    
    
    
    </>
  )
}

export default Home