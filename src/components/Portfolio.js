import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
    let resumeInfo = this.props.resumeInfo;
        return (
        <section id="portfolio">
            <div className="row">
                <div id="sixteen-columns" className="sixteen columns collapsed">
                <h4 id="portfolio-projects-headline">Portfolio Projects:</h4>
                <div id="portfolio-wrapper" className=""> 
                {resumeInfo.portfolio.map(
                    project => {
                        return(
                        <div key={project.name} id="portfolio-items" className="columns portfolio-item">
                            <div className="item-wrap">
                                <img alt="" src={`${project.imgurl}`} className="item-img"/>
                                <div className="overlay"></div>
                            </div>
                            <h2 id="portfolio-title">{project.name}</h2> 
                            <p id="portfolio-description">{project.description}</p>
                            <div id="portfolio-links">
                                <a href={project.hosted} target="_blank" rel="noreferrer">Hosted Site</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={project.front_end} target="_blank" rel="noreferrer">Front End</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={project.back_end} target="_blank" rel="noreferrer">Back End</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
        </section>
        );
    }
}

//bgrid-halves