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
                            <a href="#" className="">
                                <span className="mr-2  icon-envelope-open-o" />{" "}
                                <span className="d-none d-md-inline-block">
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="620b0c040d221b0d1710060d0f030b0c4c010d0f"
                                    >
                                        [email&nbsp;protected]
                                    </span>
                                </span>
                            </a>
                            <span className="mx-md-2 d-inline-block" />
                            <a href="#" className="">
                                <span className="mr-2  icon-phone" />{" "}
                                <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span>
                            </a>
                            <div className="float-right">
                                <a href="#" className="">
                                    <span className="mr-2  icon-twitter" />{" "}
                                    <span className="d-none d-md-inline-block">Twitter</span>
                                </a>
                                <span className="mx-md-2 d-inline-block" />
                                <a href="#" className="">
                                    <span className="mr-2  icon-facebook" />{" "}
                                    <span className="d-none d-md-inline-block">Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header
                className="site-navbar js-sticky-header site-navbar-target"
                role="banner"
            >
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="site-logo">
                            <a href="index.html" className="text-black">
                                <span className="text-primary">Depot</span>
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
                                href="#"
                                className="site-menu-toggle py-5 js-menu-toggle text-black"
                            >
                                <span className="icon-menu h3" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header