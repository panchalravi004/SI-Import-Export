import React from 'react'

// import { GridLoader } from 'react-spinners';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        message:''
    })

    let [loading, setLoading] = useState(false);
    const handleInputChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        console.log('handleFormSubmit ',JSON.stringify(formData));
        const form = new FormData();
        form.append('firstName', formData['firstName'])
        form.append('lastName', formData['lastName'])
        form.append('email', formData['email'])
        form.append('phone', formData['phone'])
        form.append('message', formData['message'])
        try {
            setLoading(true);
            const response = await fetch('/',{
                method:'POST',
                body:form
            })

            let result = await response.text();
            console.log('handleFormSubmit ',result);
            result = JSON.parse(result);
            console.log('handleFormSubmit ',result);
            if(result['status'] === 'Success'){
                // show toast message
                toast.success(result['message'])
            }else{
                
                toast.warning(result['message'])
            }
            setLoading(false);
            document.querySelectorAll("#firstName,#lastName,#phone,#email,#message")
            .forEach(element => {
                element.value = '';
            });
        } catch (error) {
            console.log('handleFormSubmit Error :', error);
            console.log('handleFormSubmit Error :', error.stack);
        }
    }


    return (
        <>
            {/* {
                loading &&
                <div className="d-flex justify-content-center align-items-center" style={{width:"100%",height:"100%", top:"0",background:"#0000004f",zIndex:1000, position:"fixed"}}>
                    <GridLoader size={10} color={"#ffffff"} loading={loading}/>
                </div>
            } */}
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
                                            name="firstName"
                                            id="firstName"
                                            className="form-control"
                                            placeholder="First name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="form-control"
                                            placeholder="Last name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email address"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="Phone number"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            placeholder="Write your message."
                                            cols={30}
                                            rows={10}
                                            defaultValue={""}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 mr-auto">
                                        <input
                                            type="submit"
                                            className="btn btn-block btn-primary text-white py-3 px-5"
                                            defaultValue="Send Message"
                                            onClick={handleFormSubmit}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact