import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render() {
    let resumeInfo = this.props.resumeInfo;
    
    return (
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Porfolio</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#footer">Contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{resumeInfo.name}</h1>
                        <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeInfo.role} {resumeInfo.roleDescription}</h3>
                        <hr/>
                        <ul className="social">
                            <a href="https://github.com/estein1988" target="_blank" rel="noreferrer"><FontAwesomeIcon id="header-icons" icon={faGithub} size="2x"/></a>
                            <a href="https://www.linkedin.com/in/steinelliott/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="header-icons" icon={faLinkedin} size="2x"/></a>
                            <a href="https://estein1988.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="header-icons" icon={faMedium} size="2x"/></a>
                            <a href="https://www.youtube.com/channel/UCB7IDX2G2WQxgUn4lRkdT9g" target="_blank" rel="noreferrer"><FontAwesomeIcon id="header-icons" icon={faYoutube} size="2x"/></a>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        </React.Fragment>
        );
    }
}

export default Header;