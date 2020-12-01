import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
    let resumeInfo = this.props.resumeInfo;
        return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                <h6 id="portfolio-projects-headline">Portfolio Projects:</h6>
                <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                {resumeInfo.portfolio && resumeInfo.portfolio.map(
                    item => {
                        return(
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-01">
                                <img src={`${item.imgurl}`} className="item-img"/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        {/* <h5>{item.name}</h5> */}
                                        {/* <p>{item.description}</p> */}
                                    </div>
                                </div>
                                </a>
                            </div>
                            <h6>{item.name}: {item.description}</h6>
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