import React from 'react';

function Education() {
    return (
        <div id="education">
            <div className="container"
            >
                <div className="row section-intro">
                    <div className="col-12">
                        <h5 className="text-center">EDUCATION</h5>
                    </div>
                </div>

                <div className="row resume-timeline">
                    <div className="col-12">
                        <div className="timeline-wrap">
                            <div className="timeline-block"
                                data-aos="fade-right"
                                data-aos-delay="0"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-linear"
                            >
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>

                                <div className="timeline-header">
                                    <h3>Master Degree</h3>
                                    <p>August 2019 - Present</p>
                                </div>

                                <div className="timeline-content">
                                    <h4>Department of Computer Science, University of Delhi</h4>
                                    <p><strong>Field Of Study : </strong>Computer Science <br /><strong>CGPA : </strong>NA</p>
                                </div>
                            </div> {/*<!-- /timeline-block -->*/}

                            <div className="timeline-block"
                                data-aos="fade-left"
                                data-aos-delay="0"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-linear"
                            >
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-header">
                                    <h3>Bachelor Degree</h3>
                                    <p>July 2016 - June 2019</p>
                                </div>
                                <div className="timeline-content">
                                    <h4>Sri Venkateswara College, University of Delhi</h4>
                                    <p><strong>Field Of Study : </strong>Electronics <br /><strong>CGPA : </strong>9.135</p>
                                </div>
                            </div> {/*<!-- /timeline-block -->*/}
                        </div> {/*<!-- /timeline-wrap -->*/}
                    </div> {/*<!-- /col-twelve -->*/}
                </div> {/*<!-- /resume-timeline -->*/}
            </div>
        </div>
    )
}

export default Education;