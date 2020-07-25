import React from 'react';

function Footer() {
    return (
        <div id="footer" className="text-center">
            <div className="container">
                <div className="row">

                    <div className="col-12 mb-3" style={{ color: 'white' }}>
                        <div className="copyright">
                            <span>Made with &hearts; By Tanmay</span>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/tanmay.saxena.353/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/Tanmay881999"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/Tanmay0808"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/saxena.tanmay"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/tanmay-saxena-337027194"><i className="fab fa-linkedin-in"></i></a>
                            <a href="mailto:tanmay881999@gmail.com"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>

                </div> {/*<!-- /row -->*/}
            </div>
            <button id="go-top" title="Go To Top"><i className="fas fa-angle-double-up"></i></button>
        </div>
    )
}

export default Footer;