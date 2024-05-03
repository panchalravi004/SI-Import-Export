import React, { useEffect } from 'react'
import Services from './services';
import About from './about';
import Contact from './contact';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="site-wrap" id="home-section">
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
                                            src={require("../assets/images/depot_delivery_1.jpg")}
                                            
                                        />
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
                                            src={require("../assets/images/depot_delivery_1.jpg")}
                                            
                                        />
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
                                            src={require("../assets/images/depot_delivery_1.jpg")}
                                        />
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

                <Services/>
                <About/>
                <Contact/>
            </div>
        </>
    )
}

export default Home
