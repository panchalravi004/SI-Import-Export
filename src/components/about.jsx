/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import '../assets/css/style.css';
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
                            <img src={require("../assets/images/ship-1.jpg")} alt='test' className='col-lg-4 col-12' />
                            <img src={require("../assets/images/ship-3.jpg")} alt='test' className='col-lg-4 col-12' style={{margin:"10px 0px"}} />
                            <img src={require("../assets/images/ship-4.jpg")} alt='test' className='col-lg-4 col-12' />
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
                                            <span data-number={5}>5</span>+
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
                                            <span data-number={25}>25</span>+
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
                                            <span data-number={20}>20</span>+
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
                                            <span data-number={110}>110</span>+
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
                                    Our dedicated team of industry experts is the driving force behind our success, delivering excellence with every shipment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div class="row" style={{margin:'30px 0px'}}>
                            <div className="col-lg-6">
                                <div style={{width:'100%', height:'400px',}}>

                                    <img style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'10px'}} alt='owner' src={require('../assets/images/owners-v2.jpg')}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span style={{fontSize:'20px', fontWeight:'bold'}}>Juhil Golaviya & Rutvik Golaviya</span>
                                <p style={{ margin: '10px 0px' }}>
                                    Founders
                                </p>
                                <p>
                                    At Shree International, we pride ourselves on being a leading player in the import and export industry. 
                                    Our mission is to facilitate international trade by providing efficient and cost-effective solutions to 
                                    businesses of all sizes.
                                    <br/><br/>
                                    With our team of experts and a strong global network, we ensure smooth operations, timely deliveries, and 
                                    exceptional customer service. Learn more about our company, values, and commitment to excellence on our 
                                    About Us page.
                                </p>
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
                                    <h2>Products</h2>
                                    <p>
                                        Explore our diverse range of products tailored to meet your import and export needs. From raw materials to finished goods, we offer comprehensive solutions for seamless global trade.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <img
                                        src={require("../assets/images/product/pro-1.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Boat on Calm Water"
                                        style={{height:"200px",width:'100%',objectFit:"cover"}}
                                    />

                                    <img
                                        src={require("../assets/images/product/pro-2.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Wintry Mountain Landscape"
                                        style={{height:"400px",width:'100%',objectFit:"cover"}}
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                        src={require("../assets/images/product/pro-3.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Mountains in the Clouds"
                                        style={{height:"400px",width:'100%',objectFit:"cover"}}
                                    />

                                    <img
                                        src={require("../assets/images/product/pro-4.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Boat on Calm Water"
                                        style={{height:"200px",width:'100%',objectFit:"cover"}}
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                        src={require("../assets/images/product/pro-5.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Waves at Sea"
                                        style={{height:"200px",width:'100%',objectFit:"cover"}}
                                    />

                                    <img
                                        src={require("../assets/images/product/pro-6.png")}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Yosemite National Park"
                                        style={{height:"400px",width:'100%',objectFit:"cover"}}
                                    />
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
                                        What shipping methods do you offer?
                                    </h3>
                                    <p>
                                        We offer a range of shipping options, including air freight, ocean freight, and ground transportation, tailored to meet your specific needs.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">
                                        How can I track my shipment?
                                    </h3>
                                    <p>
                                        You can track your shipment in real-time using our online tracking system or by contacting our customer support team for assistance.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">
                                        What countries do you ship to?
                                    </h3>
                                    <p>
                                        We provide import and export services to destinations worldwide, ensuring seamless delivery to virtually any location.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">
                                        What documents are required for customs clearance?
                                    </h3>
                                    <p>
                                        The required documents vary depending on the destination and nature of the shipment, but typically include a commercial invoice, packing list, and bill of lading.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">How do you ensure the safety of my cargo?</h3>
                                    <p>
                                        We implement stringent security measures and work with trusted carriers to safeguard your cargo throughout the transportation process.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">What are your payment terms?</h3>
                                    <p>
                                        Our payment terms are flexible and can be tailored to suit your preferences, with options 
                                        including LOC(Letter Of Credit), Cash In Advance, Documentary Collections, Wire Transfer.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">
                                        Do you provide insurance for shipments?
                                    </h3>
                                    <p>
                                        Yes, we offer comprehensive cargo insurance options to protect your shipments against loss, damage, or theft during transit.
                                    </p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">
                                        How do I get started with your services?
                                    </h3>
                                    <p>
                                        Simply reach out to our team via phone, email, or our online contact form, and we'll guide you through the process of setting up your account and initiating your first shipment.
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
                                style={{ backgroundImage: `url(${require("../assets/images/man-with-container.jpg")})` }}
                                data-aos="fade-left"
                                data-aos-delay=""
                            ></div>
                            <div
                                className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1"
                                data-aos="fade-right"
                                data-aos-delay=""
                            >
                                <h2 className="mb-4 text-black">Why Shree International</h2>
                                <p>
                                    Discover the advantages of partnering with us for your import-export needs. From our personalized approach to our commitment to efficiency and reliability, find out why we're the perfect choice for your global trade endeavors.
                                </p>
                                <ul className="">
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
                                    <h6 className="text-black">Africa</h6>
                                </div>
                            </div>
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
                                    <h6 className="text-black">UAE</h6>
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
                                    <h6 className="text-black">Singapore</h6>
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
                                    <h6 className="text-black">Nepal</h6>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “Working with Shree International has been a game-changer for our supply chain. 
                                            Their expertise and dedication to efficiency have helped us optimize our operations 
                                            and reduce costs. Their team is always responsive and proactive”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_1.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">David M</h3>
                                    <h6 className="text-black">Vietnam</h6>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “We've been partnering with Shree International for several years now, and they 
                                            have consistently delivered exceptional service. Their attention to detail, reliability, 
                                            and commitment to customer satisfaction set them apart.”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_3.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">Jessica K</h3>
                                    <h6 className="text-black">Malaysia</h6>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>
                                            “Choosing Shree International was one of the best decisions we made for 
                                            our import-export business. Their expertise in navigating international 
                                            trade regulations and their dedication to providing personalized solutions 
                                            have been invaluable to us. ”
                                        </p>
                                    </blockquote>
                                    <figure>
                                        <img
                                            alt="Image"
                                            className="img-fluid rounded-circle mx-auto"
                                            src={require("../assets/images/person_2.jpg.webp")}
                                        />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">Alex H</h3>
                                    <h6 className="text-black">Srilanka</h6>
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
                                    <a href="/" className="blog-thumbnail mb-3 d-block" style={{marginRight:'0'}}>
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            src={require("../assets/images/truck-on-road.jpg")}
                                        />
                                    </a>
                                    <div className="blog-excerpt">
                                        <span className="d-block text-muted">Apr 24, 2024</span>
                                        <h2 className="h4  mb-3">
                                            <a href="/">
                                                Navigating Post-Pandemic Trade: Strategies for Success
                                            </a>
                                        </h2>
                                        <p>
                                            Explore how Shree International adapts to the evolving global trade landscape, offering insights and solutions to thrive in a post-pandemic world.
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
                                    <a href="/" className="blog-thumbnail mb-3 d-block" style={{marginRight:'0'}}>
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            src={require("../assets/images/girl-in-warehouse.jpg")}
                                        />
                                    </a>
                                    <div className="blog-excerpt">
                                        <span className="d-block text-muted">March 12, 2024</span>
                                        <h2 className="h4  mb-3">
                                            <a href="/">
                                                Sustainability in Supply Chains
                                            </a>
                                        </h2>
                                        <p>
                                            Learn how Shree International leads the charge in sustainable logistics, integrating eco-friendly practices and technologies to create greener supply chains for a brighter future.
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