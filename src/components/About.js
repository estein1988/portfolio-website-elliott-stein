import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
    render() {
    let resumeInfo = this.props.resumeInfo;

        return (
        <section id="about">
            <div className="row justify-content-center">

                {/* <div className="three columns">
                    <img className="profile-pic"  src="images/profilepic.jpg" alt=""/>
                </div> */}

                <div className="twelve columns">
                    <h2 id="about-me-header">About Me</h2>
                    <p id="about-me-text">{resumeInfo.aboutme}</p>
                </div>

            </div>
        </section>
        );
    }
}

export default About;