import React, { useEffect } from 'react'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>

            <div className="site-wrap" id="home-section">
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
                                            <a href="#about-section" className="nav-link">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#why-us-section" className="nav-link">
                                                Why Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#testimonials-section" className="nav-link">
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#blog-section" className="nav-link">
                                                Blog
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
                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${require("../assets/images/depot_hero_1.jpg")})`}} >
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-lg-6">
                                    <h1>Transportations &amp; Logistics</h1>
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                                        dolorem eius eligendi esse quod?
                                    </p>
                                    <form action="#">
                                        <div className="form-group d-flex">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your tracking number"
                                            />
                                            <input
                                                type="submit"
                                                className="btn btn-primary text-white px-4"
                                                defaultValue="Track Now"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section ftco-service-image-1 pb-5">
                        <div className="container">
                            <div className="owl-carousel owl-all">
                                <div className="service text-center">
                                    <a href="#">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            data-cfsrc="/assets/images/depot_img_1.jpg"
                                            style={{ display: "none", visibility: "hidden" }}
                                        />
                                        <noscript>
                                            &lt;img src="images/depot_img_1.jpg" alt="Image"
                                            class="img-fluid" /&gt;
                                        </noscript>
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="#">Truck Insurance</a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                                            distinctio laudantium nulla eos numquam incidunt!
                                        </p>
                                    </div>
                                </div>
                                <div className="service text-center">
                                    <a href="#">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            data-cfsrc="/assets/images/depot_img_2.jpg"
                                            style={{ display: "none", visibility: "hidden" }}
                                        />
                                        <noscript>
                                            &lt;img src="images/depot_img_2.jpg" alt="Image"
                                            class="img-fluid" /&gt;
                                        </noscript>
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="#">Plane Transportation</a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                                            distinctio laudantium nulla eos numquam incidunt!
                                        </p>
                                    </div>
                                </div>
                                <div className="service text-center">
                                    <a href="#">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            data-cfsrc="/assets/images/depot_img_3.jpg"
                                            style={{ display: "none", visibility: "hidden" }}
                                        />
                                        <noscript>
                                            &lt;img src="images/depot_img_3.jpg" alt="Image"
                                            class="img-fluid" /&gt;
                                        </noscript>
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="#">Sea &amp; Ear Freight</a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                                            distinctio laudantium nulla eos numquam incidunt!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light" id="services-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-7 text-center">
                                <div className="block-heading-1">
                                    <h2>Services</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel owl-all">
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-ferry" />
                                </div>
                                <h3 className="mb-3">Sea Freight</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-airplane" />
                                </div>
                                <h3 className="mb-3">Air Freight</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-box" />
                                </div>
                                <h3 className="mb-3">Package Forwarding</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-lorry" />
                                </div>
                                <h3 className="mb-3">Trucking</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-warehouse" />
                                </div>
                                <h3 className="mb-3">Warehouse</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="block__35630 text-center">
                                <div className="icon mb-0">
                                    <span className="flaticon-add" />
                                </div>
                                <h3 className="mb-3">Delivery</h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section" id="about-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-7 text-center">
                                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                    <h2>About Us</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light" id="about-section">
                    <div className="container">
                        <div className="row justify-content-center mb-4 block-img-video-1-wrap">
                            <div className="col-md-12 mb-5">
                                <figure className="block-img-video-1" data-aos="fade">
                                    <a
                                        href="https://vimeo.com/45830194"
                                        data-fancybox=""
                                        data-ratio={2}
                                    >
                                        <span className="icon">
                                            <span className="icon-play" />
                                        </span>
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            data-cfsrc="/assets/images/depot_delivery_1.jpg"
                                            style={{ display: "none", visibility: "hidden" }}
                                        />
                                        <noscript>
                                            &lt;img src="images/depot_delivery_1.jpg" alt="Image"
                                            class="img-fluid" /&gt;
                                        </noscript>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div
                                        className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay=""
                                    >
                                        <div className="block-counter-1">
                                            <span className="number">
                                                <span data-number={19}>0</span>+
                                            </span>
                                            <span className="caption">Years in Service</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <div className="block-counter-1">
                                            <span className="number">
                                                <span data-number={2332}>0</span>+
                                            </span>
                                            <span className="caption">Employees</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <div className="block-counter-1">
                                            <span className="number">
                                                <span data-number={231}>0</span>+
                                            </span>
                                            <span className="caption">Covered Countries</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <div className="block-counter-1">
                                            <span className="number">
                                                <span data-number={827}>0</span>+
                                            </span>
                                            <span className="caption">Couriers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section" id="team-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-7 text-center">
                                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                    <h2>Our Staff</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel owl-all mb-5">
                            <div className="block-team-member-1 text-center rounded h-100">
                                <figure>
                                    <img
                                        alt="Image"
                                        className="img-fluid rounded-circle"
                                        data-cfsrc="/assets/images/person_1.jpg"
                                        style={{ display: "none", visibility: "hidden" }}
                                    />
                                    <noscript>
                                        &lt;img src="images/person_1.jpg" alt="Image" class="img-fluid
                                        rounded-circle" /&gt;
                                    </noscript>
                                </figure>
                                <h3 className="font-size-20 text-black">Max Carlson</h3>
                                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                                    Co-Founder
                                </span>
                                <p className="mb-4">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className="block-social-1">
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-facebook" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-twitter" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="block-team-member-1 text-center rounded h-100">
                                <figure>
                                    <img
                                        alt="Image"
                                        className="img-fluid rounded-circle"
                                        data-cfsrc="/assets/images/person_2.jpg"
                                        style={{ display: "none", visibility: "hidden" }}
                                    />
                                    <noscript>
                                        &lt;img src="images/person_2.jpg" alt="Image" class="img-fluid
                                        rounded-circle" /&gt;
                                    </noscript>
                                </figure>
                                <h3 className="font-size-20 text-black">Charlotte Pilat</h3>
                                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                                    Co-Founder
                                </span>
                                <p className="mb-4">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className="block-social-1">
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-facebook" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-twitter" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="block-team-member-1 text-center rounded h-100">
                                <figure>
                                    <img
                                        alt="Image"
                                        className="img-fluid rounded-circle"
                                        data-cfsrc="/assets/images/person_3.jpg"
                                        style={{ display: "none", visibility: "hidden" }}
                                    />
                                    <noscript>
                                        &lt;img src="images/person_3.jpg" alt="Image" class="img-fluid
                                        rounded-circle" /&gt;
                                    </noscript>
                                </figure>
                                <h3 className="font-size-20 text-black">Nicole Lewis</h3>
                                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                                    Co-Founder
                                </span>
                                <p className="mb-4">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className="block-social-1">
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-facebook" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-twitter" />
                                    </a>
                                    <a
                                        href="#"
                                        className="btn border-w-2 rounded primary-primary-outline--hover"
                                    >
                                        <span className="icon-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section bg-light" id="pricing-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center text-center">
                                <div className="col-md-7">
                                    <div
                                        className="block-heading-1"
                                        data-aos="fade-up"
                                        data-aos-delay=""
                                    >
                                        <h2>Pricing</h2>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div
                                    className="col-md-6 mb-4 mb-lg-0 col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay=""
                                >
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Basic</h3>
                                        <div className="price text-center mb-4 ">
                                            <span>
                                                <span>$47</span> / year
                                            </span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">
                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li className="remove">Lorem ipsum dolor sit amet</li>
                                            <li className="remove">Consectetur adipisicing elit</li>
                                            <li className="remove">
                                                Dolorum esse odio quas architecto sint
                                            </li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-secondary btn-md">
                                                Buy Now
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 mb-4 mb-lg-0 col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Premium</h3>
                                        <div className="price text-center mb-4 ">
                                            <span>
                                                <span>$200</span> / year
                                            </span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">
                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipisicing elit</li>
                                            <li className="remove">
                                                Dolorum esse odio quas architecto sint
                                            </li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-primary btn-md text-white">
                                                Buy Now
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 mb-4 mb-lg-0 col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Professional</h3>
                                        <div className="price text-center mb-4 ">
                                            <span>
                                                <span>$750</span> / year
                                            </span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">
                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipisicing elit</li>
                                            <li>Dolorum esse odio quas architecto sint</li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-secondary btn-md">
                                                Buy Now
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section" id="faq-section">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="block-heading-1 col-12 text-center">
                                    <h2>Frequently Ask Questions</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Possimus aut consequuntur incidunt?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Dolorum esse odio quas architecto sint?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Possimus aut consequuntur incidunt?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Dolorum esse odio quas architecto sint?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">Lorem ipsum dolor sit</h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">consequuntur incidunt?</h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Possimus aut consequuntur incidunt?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                    <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                        <h3 className="text-black h4 mb-4">
                                            Dolorum esse odio quas architecto sint?
                                        </h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block__73694 site-section border-top" id="why-us-section">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">
                                <div
                                    className="col-12 col-lg-6 block__73422 order-lg-2"
                                    style={{ backgroundImage: 'url("images/depot_delivery_1.jpg")' }}
                                    data-aos="fade-left"
                                    data-aos-delay=""
                                ></div>
                                <div
                                    className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1"
                                    data-aos="fade-right"
                                    data-aos-delay=""
                                >
                                    <h2 className="mb-4 text-black">Why Depot</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                                        error aliquid, dolores animi obcaecati quisquam accusamus soluta?
                                    </p>
                                    <ul className="ul-check primary list-unstyled mt-5">
                                        <li>Cargo express</li>
                                        <li>Secure Services</li>
                                        <li>Secure Warehouseing</li>
                                        <li>Cost savings</li>
                                        <li>Proven by great companies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="site-section bg-light block-13"
                        id="testimonials-section"
                        data-aos="fade"
                    >
                        <div className="container">
                            <div className="text-center mb-5">
                                <div className="block-heading-1">
                                    <h2>Happy Clients</h2>
                                </div>
                            </div>
                            <div className="owl-carousel nonloop-block-13">
                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>
                                                “The Big Oxmox advised her not to do so, because there were
                                                thousands of bad Commas, wild Question Marks and devious
                                                Semikoli, but the Little Blind Text didn’t listen. She packed
                                                her seven versalia, put her initial into the belt and made
                                                herself on the way.”
                                            </p>
                                        </blockquote>
                                        <figure>
                                            <img
                                                alt="Image"
                                                className="img-fluid rounded-circle mx-auto"
                                                data-cfsrc="/assets/images/person_1.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/person_1.jpg" alt="Image" class="img-fluid
                                                rounded-circle mx-auto" /&gt;
                                            </noscript>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>
                                                “Even the all-powerful Pointing has no control about the blind
                                                texts it is an almost unorthographic life One day however a
                                                small line of blind text by the name of Lorem Ipsum decided to
                                                leave for the far World of Grammar.”
                                            </p>
                                        </blockquote>
                                        <figure>
                                            <img
                                                alt="Image"
                                                className="img-fluid rounded-circle mx-auto"
                                                data-cfsrc="/assets/images/person_2.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/person_2.jpg" alt="Image" class="img-fluid
                                                rounded-circle mx-auto" /&gt;
                                            </noscript>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>
                                                “A small river named Duden flows by their place and supplies
                                                it with the necessary regelialia. It is a paradisematic
                                                country, in which roasted parts of sentences fly into your
                                                mouth.”
                                            </p>
                                        </blockquote>
                                        <figure>
                                            <img
                                                alt="Image"
                                                className="img-fluid rounded-circle mx-auto"
                                                data-cfsrc="images/person_1.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/person_1.jpg" alt="Image" class="img-fluid
                                                rounded-circle mx-auto" /&gt;
                                            </noscript>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>
                                                “Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind texts.
                                                Separated they live in Bookmarksgrove right at the coast of
                                                the Semantics, a large language ocean.”
                                            </p>
                                        </blockquote>
                                        <figure>
                                            <img
                                                alt="Image"
                                                className="img-fluid rounded-circle mx-auto"
                                                data-cfsrc="images/person_3.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/person_3.jpg" alt="Image" class="img-fluid
                                                rounded-circle mx-auto" /&gt;
                                            </noscript>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section py-5" id="blog-section">
                        <div className="container">
                            <div className="row justify-content-center text-center mb-5">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <div
                                        className="block-heading-1"
                                        data-aos="fade-right"
                                        data-aos-delay=""
                                    >
                                        <h2>Articles</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div
                                        className="mb-5 d-block blog-entry"
                                        data-aos="fade-right"
                                        data-aos-delay=""
                                    >
                                        <a href="single.html" className="blog-thumbnail mb-3 d-block">
                                            <img
                                                alt="Image"
                                                className="img-fluid"
                                                data-cfsrc="images/depot_img_1.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/depot_img_1.jpg" alt="Image"
                                                class="img-fluid" /&gt;
                                            </noscript>
                                        </a>
                                        <div className="blog-excerpt">
                                            <span className="d-block text-muted">Apr 19, 2019</span>
                                            <h2 className="h4  mb-3">
                                                <a href="single.html">
                                                    Knowing the Difference Is Key to Effective Logistics
                                                </a>
                                            </h2>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind texts
                                            </p>
                                            <p>
                                                <a href="single.html" className="text-primary">
                                                    Read More
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className="mb-5 d-block blog-entry"
                                        data-aos="fade-right"
                                        data-aos-delay=""
                                    >
                                        <a href="single.html" className="blog-thumbnail mb-3 d-block">
                                            <img
                                                alt="Image"
                                                className="img-fluid"
                                                data-cfsrc="images/depot_img_2.jpg"
                                                style={{ display: "none", visibility: "hidden" }}
                                            />
                                            <noscript>
                                                &lt;img src="images/depot_img_2.jpg" alt="Image"
                                                class="img-fluid" /&gt;
                                            </noscript>
                                        </a>
                                        <div className="blog-excerpt">
                                            <span className="d-block text-muted">Apr 19, 2019</span>
                                            <h2 className="h4  mb-3">
                                                <a href="single.html">
                                                    Knowing the Difference Is Key to Effective Logistics
                                                </a>
                                            </h2>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind texts
                                            </p>
                                            <p>
                                                <a href="single.html" className="text-primary">
                                                    Read More
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light" id="contact-section">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-12 text-center mb-5"
                                data-aos="fade-up"
                                data-aos-delay=""
                            >
                                <div className="block-heading-1">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mb-5" data-aos="fade-up" data-aos-delay={100}>
                                <form action="#" method="post">
                                    <div className="form-group row">
                                        <div className="col-md-6 mb-4 mb-lg-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <textarea
                                                name=""
                                                id=""
                                                className="form-control"
                                                placeholder="Write your message."
                                                cols={30}
                                                rows={10}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 mr-auto">
                                            <input
                                                type="submit"
                                                className="btn btn-block btn-primary text-white py-3 px-5"
                                                defaultValue="Send Message"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h2 className="footer-heading mb-4">About Us</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                                            voluptate debitis voluptatum et dolorum.
                                        </p>
                                    </div>
                                    <div className="col-md-4 ml-auto">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms of Service</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ml-auto">
                                <div className="mb-5">
                                    <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                                    <form action="#" method="post" className="footer-suscribe-form">
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control border-secondary text-white bg-transparent"
                                                placeholder="Enter Email"
                                                aria-label="Enter Email"
                                                aria-describedby="button-addon2"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-primary text-white"
                                                    type="button"
                                                    id="button-addon2"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <h2 className="footer-heading mb-4">Follow Us</h2>
                                <a href="#about-section" className="smoothscroll pl-0 pr-3">
                                    <span className="icon-facebook" />
                                </a>
                                <a href="#" className="pl-3 pr-3">
                                    <span className="icon-twitter" />
                                </a>
                                <a href="#" className="pl-3 pr-3">
                                    <span className="icon-instagram" />
                                </a>
                                <a href="#" className="pl-3 pr-3">
                                    <span className="icon-linkedin" />
                                </a>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>
                                        Copyright © All rights reserved | This template is made with{" "}
                                        <i className="icon-heart" aria-hidden="true" /> by{" "}
                                        <a href="https://colorlib.com" target="_blank">
                                            Colorlib
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>



        </>
    )
}

export default Home
