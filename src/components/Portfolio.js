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
                    item => {
                        return(
                        <div id="portfolio-items" className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                <img src={`${item.imgurl}`} className="item-img"/>
                                <div className="overlay">
                                    {/* <div className="portfolio-item-meta"> */}
                                        {/* <h5>{item.name}</h5> */}
                                        {/* <p>{item.description}</p> */}
                                    {/* </div> */}
                                </div>
                                {/* </a> */}
                            </div>
                            <h2 id="portfolio-title">{item.name}</h2> 
                            <p id="portfolio-description">{item.description}</p>
                            <div id="portfolio-links">
                                <a href={item.hosted} target="_blank">Hosted Site</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={item.front_end} target="_blank">Front End</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={item.back_end} target="_blank">Back End</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href={item.demo} target="_blank">Demo</a>
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