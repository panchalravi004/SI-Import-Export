import React, { useEffect, useState } from 'react'

function Footer() {

    const [year, setCount] = useState(0);

    useEffect(() => {
        var dt = new Date();
        setCount((year) => dt.getFullYear());
    }, []);
    
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="footer-heading mb-4">About Us</h2>
                                    <p>
                                        Beyond our dedication to exceptional service, we are committed to sustainability and social responsibility, actively seeking ways to minimize our environmental footprint and make a positive impact on the communities we serve.
                                    </p>
                                </div>
                                <div className="col-md-6 mr-auto" style={{textAlign:'center'}}>
                                    <h2 className="footer-heading mb-4">Features</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#about-section">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#services-section">Services</a>
                                        </li>
                                        <li>
                                            <a href="#why-us-section">Why Us</a>
                                        </li>
                                        <li>
                                            <a href="#contact-section">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <p>
                                    Copyright &copy;{year} <b>Shree International Import Export</b> | All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer