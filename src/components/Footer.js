import React, { Component } from 'react';

class Footer extends Component {

    render() {
        let resumeInfo = this.props.resumeInfo;

        return (
        <footer id="footer">
            <div className="row">
                <div className="twelve columns">
                <ul className="social-links">
                    {resumeInfo.socialLinks.map(socialLink => {
                        return(
                            <li key={socialLink.url}>
                                <a href={socialLink.url}>
                                <i className={socialLink.className} />
                                </a>
                            </li>
                        )
                    })}
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