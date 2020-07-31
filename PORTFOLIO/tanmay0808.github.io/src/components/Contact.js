import React from 'react';

function Contact() {
    return (
        <div id="contact" className="bg-light">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-10"
                        data-aos="flip-left"
                        data-aos-delay="0"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-linear"
                    >
                        <h5 className="text-center">CONTACT</h5>
                        <h3 className="text-center mb-5">I'd Love To Hear From You.</h3>
                        <div className="form-group">
                            <form action="https://formspree.io/xpzykqlj" method="POST">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label for="name" className="form-label">Name </label>
                                            <input type="text" name="name" placeholder="Enter Your Name" className='form-control' required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label for="email" className="form-label">Email </label>
                                            <input type="email" name="_replyto" placeholder="Enter Your Email" className='form-control' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="subject" className="form-label">Subject </label>
                                    <input type="text" name='subject' placeholder="Subject" className='form-control' required />
                                </div>
                                <div className="form-group">
                                    <label for="message" className="form-label">Message </label>
                                    <textarea rows="4" className="form-control" name="message" required style={{ resize: 'none' }}></textarea>
                                </div>
                                <button className="btn btn-success mt-3">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;