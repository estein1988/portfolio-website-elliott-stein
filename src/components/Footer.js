import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

    render() {
        let resumeInfo = this.props.resumeInfo;

        return (
        <footer id="footer">
            <div className="row">
                <div className="twelve columns">
                <ul className="social">
                            <a href="https://github.com/estein1988" target="_blank" rel="noreferrer"><FontAwesomeIcon id="footer-icons" icon={faGithub} size="3x"/></a>
                            <a href="https://www.linkedin.com/in/steinelliott/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="footer-icons" icon={faLinkedin} size="3x"/></a>
                            <a href="https://estein1988.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="footer-icons" icon={faMedium} size="3x"/></a>
                            <a href="https://www.youtube.com/channel/UCB7IDX2G2WQxgUn4lRkdT9g" target="_blank" rel="noreferrer"><FontAwesomeIcon id="footer-icons" icon={faYoutube} size="3x"/></a>
                        </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a>
                </div>
            </div>
                <div id="contact-info">
                    Elliott Stein | estein1988@gmail.com | 763-242-7771
                </div>
        </footer>
        );
    };
};

export default Footer;