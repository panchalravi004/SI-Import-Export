import React from 'react'

function About() {
    return (
        <>
            <div className="site-section" id="about-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                <h2>About Us</h2>
                                <p>
                                    Welcome to Shree International Import Export, your trusted partner in the dynamic world of import and export. Established with a vision to redefine global trade, we bring together expertise, innovation, and a commitment to excellence in every aspect of our operations.
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
                            <img src={require("../assets/images/depot_hero_1.jpg")} alt='test' className='col-lg-4 col-12' />
                            <img src={require("../assets/images/depot_hero_1.jpg")} alt='test' className='col-lg-4 col-12' />
                            <img src={require("../assets/images/depot_hero_1.jpg")} alt='test' className='col-lg-4 col-12' />
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
                                            “Choosing Shree International was one of the best decisions we made for our import-export operations. 
                                            Their attention to detail and proactive approach have consistently ensured smooth transactions and timely deliveries. 
                                            Their team truly understands our business needs and goes the extra mile to exceed our expectations. 
                                            Highly recommended!”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_3.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “Working with Shree International has been a game-changer for our supply chain management. 
                                            Their expertise and efficiency have streamlined our processes, saving us time and resources 
                                            while enhancing our operational performance. Their commitment to customer satisfaction is evident 
                                            in every interaction, and we couldn't be happier with the results.”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_1.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “From navigating complex customs regulations to optimizing our logistics strategies, 
                                            they have consistently delivered exceptional service and tangible results. Their 
                                            professionalism and reliability make them an invaluable asset to our business.”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_2.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “Their proactive communication, attention to detail, and commitment to 
                                            finding innovative solutions have made our import-export processes seamless 
                                            and stress-free. We couldn't be happier with the level of service they provide.”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_4.jpg")}
                                        />
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
                                            data-cfsrc="../assets/images/depot_hero_1.jpg"
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
                                            data-cfsrc="../assets/images/depot_hero_1.jpg"
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
        </>
    )
}

export default About