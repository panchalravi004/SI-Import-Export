import React from 'react'

function Header() {
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a href="/" className="">
                                <span className="mr-2 d-none d-md-inline-block  icon-envelope-open-o" />{" "}
                                <span className="d-none d-md-inline-block">
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="620b0c040d221b0d1710060d0f030b0c4c010d0f"
                                    >
                                        shreeinternational2110@gmail.com
                                    </span>
                                </span>
                            </a>
                            <span className="mx-md-2 d-inline-block" />
                            <a href="/" className="">
                                <span className="d-none d-md-inline-block">  </span>
                            </a>
                            <div className="float-right">
                                <a href="/" className="mr-2">
                                    <span className="mr-2 d-none d-inline-block icon-phone" />
                                    <span className="d-md-inline-block">+919712950557</span>
                                </a>
                                <span className="mx-md-2 d-inline-block" />
                                <a href="/" className="ml-2">
                                    <span className="mr-2  d-none d-inline-block icon-phone" />
                                    <span className=" d-md-inline-block">+919510500815</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative" style={{padding:"20px 0px"}}>
                        <div className="site-logo">
                            <img src={require('../../assets/images/logo-2.png')} width={100} style={{margin:'5px 0px'}} alt='logo' />
                            <a href="/" className="text-black">
                                <p style={{color:'#1c5597', fontSize:'17px', margin:'0', textTransform:'uppercase'}} >Shree International</p>
                                <span className='text-secondary'>Import & Export</span>
                            </a>
                        </div>
                        <div className="col-12">
                            <nav
                                className="site-navigation text-right ml-auto "
                                role="navigation"
                            >
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li>
                                        <a href="#home-section" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#services-section" className="nav-link">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#why-us-section" className="nav-link">
                                            Why Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about-section" className="nav-link">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact-section" className="nav-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="toggle-button d-inline-block d-lg-none">
                            <a
                                href="/"
                                className="site-menu-toggle py-5 js-menu-toggle text-black"
                            >
                                <span className="icon-menu h3"  >
                                    {/* <i class="fa-solid fa-bars"></i> */}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header