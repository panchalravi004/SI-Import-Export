import React from 'react'

function Services() {
    return (
        <>
            <div className="site-section bg-light" id="services-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="block-heading-1">
                                <h2>Services</h2>
                                <p>
                                    Discover seamless import and export solutions tailored to your needs. Our comprehensive services encompass everything from logistics and customs clearance to freight forwarding and supply chain management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel owl-all" style={{display:'block', opacity:'1'}}>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-ferry" />
                            </div>
                            <h3 className="mb-3">Customs Clearance Assistance</h3>
                            <p>
                                Simplify the complexities of international trade regulations with our expert customs clearance services.
                            </p>
                        </div>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-airplane" />
                            </div>
                            <h3 className="mb-3">Freight Forwarding Solutions</h3>
                            <p>
                                Entrust your cargo to our reliable freight forwarding services. From negotiating competitive rates to tracking shipments in real-time.
                            </p>
                        </div>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-box" />
                            </div>
                            <h3 className="mb-3">Supply Chain Optimization</h3>
                            <p>
                                Unlock the full potential of your supply chain with our tailored optimization solutions. Through strategic planning and implementation of best practices.
                            </p>
                        </div>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-lorry" />
                            </div>
                            <h3 className="mb-3">Documentation Management</h3>
                            <p>
                                Let us handle the intricate documentation requirements of international trade on your behalf. Our meticulous documentation management services ensure accuracy.
                            </p>
                        </div>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-warehouse" />
                            </div>
                            <h3 className="mb-3">Cargo Insurance Services</h3>
                            <p>
                                Protect your shipments against unforeseen risks with our comprehensive cargo insurance solutions. From transit damage to theft and liability coverage.
                            </p>
                        </div>
                        <div className="block__35630 text-center">
                            <div className="icon mb-0">
                                <span className="flaticon-add" />
                            </div>
                            <h3 className="mb-3">Trade Compliance Consulting</h3>
                            <p>
                                Stay ahead of changing regulations and mitigate compliance risks with our specialized trade compliance consulting services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services