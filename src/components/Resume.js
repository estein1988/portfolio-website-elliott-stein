import React, { Component } from 'react';

class Resume extends Component {
    render() {
        let resumeInfo = this.props.resumeInfo;
        
        return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                <h1>
                    <span>Education</span>
                </h1>
                </div>
                <div className="nine columns main-col">
                {resumeInfo.education.map(school => {
                    return(
                        <div key={school.UniversityName} className="row item">
                            <div className="twelve columns">
                                <h3>{school.UniversityName}</h3>
                                <p className="info">
                                {school.specialization}
                                <span>&bull;</span> <em key={school.MonthOfPassing} className="date">{school.MonthOfPassing} {school.YearOfPassing}</em></p>
                                <p>
                                {school.Achievements}
                                </p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                {resumeInfo.work.map(position => {
                    return(
                        <div key={position.CompanyName} className="row item">
                            <div className="twelve columns">
                                <h3>{position.CompanyName}</h3>
                                <p className="info">
                                {position.specialization}
                                <span>&bull;</span> <em key={position.MonthOfStarting} className="date">{position.MonthOfStarting} {position.YearOfStarting} - {position.MonthOfLeaving} {position.YearOfLeaving}</em></p>
                                <p>
                                {position.Achievements}
                                </p>
                            </div>
                        </div>
                    )
                })}
                </div> 
            </div>
        </section>
        );
    }
}

export default  Resume