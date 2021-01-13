import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar';
import './project.css';

class Project extends Component {

    render() {
        return (
            <>
                <Navbar />
                <div style={{ marginTop: "80px" }}>
                    <div className="project_main">
                        <h2>Projects</h2>
                        <hr />
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/indeed.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>Indeed Clone</li>
                                    <li>MERN stack</li>
                                    <li>Front-end: React</li>
                                    <li>Back-end: Node.js</li>
                                    <li>Database: MongoDB</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/covid.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>COVID-19 LiveTracker</li>
                                    <li>React Project</li>
                                    <li>Front-end: React</li>
                                    <li>packages: Axios, MaterialUI, graph.js ...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/training.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>Training Acadamey</li>
                                    <li>React Capstone project</li>
                                    <li>Packages: Axios, graph.js, React-load-spinner, React-router-DOM etc..</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/instagram.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>Instagram clone</li>
                                    <li>MERN stack</li>
                                    <li>Front-end: React</li>
                                    <li>Back-end: Node.js</li>
                                    <li>Database: MongoDB</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/card.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>Card Designing</li>
                                    <li>React Project</li>
                                    <li>Front-end: React</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/cricket.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>CricketDB</li>
                                    <li>MERN Stack</li>
                                    <li>Front-end: React</li>
                                    <li>Back-end: Node.js</li>
                                    <li>Database: MongoDB</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_details">
                            <div className="project_image">
                                <img src="/images/moviedb.png" alt="no" />
                            </div>
                            <div className="project_content">
                                <h2>Project Description</h2>
                                <ul type="circle">
                                    <li>MovieDB</li>
                                    <li>MERN Stack</li>
                                    <li>Front-end: React</li>
                                    <li>Back-end: Node.js</li>
                                    <li>Database: MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Project;
