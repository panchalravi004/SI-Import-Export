import React, { useEffect, useState } from 'react'

function Footer() {

    const [year, setCount] = useState(0);

    useEffect(() => {
        var dt = new Date();
        setCount((year) => dt.getFullYear());
    }, []);
    
    return (
        <>
            <footer className="site-footer" style={{paddingBottom:'0', paddingTop:'60px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="footer-heading mb-4">Features</h2>
                                    <ul className="list-unstyled " style={{marginBottom:'35px'}}>
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

                                    <h2 className="footer-heading mb-4">About Us</h2>
                                    <p>
                                        Beyond our dedication to exceptional service, we are committed to sustainability and social responsibility, actively seeking ways to minimize our environmental footprint and make a positive impact on the communities we serve.
                                    </p>
                                </div>
                                <div className="col-md-6 mr-auto">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5083711797824!2d72.95577657431039!3d21.171954682846764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be044cdf05f62bb%3A0x17245cd26a3aeb6c!2sMahalaxmi%20Dyeing%20%26%20Printing%20Mill!5e0!3m2!1sen!2sin!4v1714803677028!5m2!1sen!2sin" height="450" style={{width:'100%', border:'0', borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-2">
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