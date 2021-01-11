import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar'
import './education.css';

class Education extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div style={{ marginTop: "80px" }}>
                    <div className="education_main">
                        <div className="education_proExpericence">
                            <h2>Professional Experience</h2>
                            <hr />
                            <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                            <label>2019-Training</label><br /><br />
                            <label>Mysore, Karnataka</label>
                            <ul type="circle">
                                <li>In training, I have been trained in pthyon and java technologies.</li>
                                <li>Training has been divided into two parts Generic and stream training.</li>
                                <li>In Generic training,they trained us in python and sql database.</li>
                                <li>In stream training,they trained us in core java and spring farmework.</li>
                            </ul>
                        </div>
                        <div className="education_proExpericence">
                            {/* <h2>Professional Experience</h2>
                            <hr /> */}
                            <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                            <label>2020-Job</label><br /><br />
                            <label>Chengalpattu, Tamilnadu</label>
                            <ul type="circle">
                                <li>After compeleting my training in mysore allocated to Chennai mahendra-worldcity DC</li>
                                <li>I were assigned in some Accrelate task and after some time, I been Assigned Bank sector related Project.</li>
                                <li>Work us support Java Developer</li>
                                <li>Desgination- Operations Exective</li>
                            </ul>
                        </div>
                        <div className="education_proExpericence">
                            {/* <h2>Professional Experience</h2>
                            <hr /> */}
                            <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                            <label>2020-Job</label><br /><br />
                            <label>Bangalore, Karnataka</label>
                            <ul type="circle">
                                <li>After 6 months, I got a Project allocation from Bangalore in BT(British Telecomunication) project and transfered to Bangalore.</li>
                                <li>And, I have been worked Operations team and learned some new technologies Like Apache Kafha, Docker.</li>
                                <li>Started my selflearning in ReactJs and gain more knownledge in UI Designing</li>
                                <li>After, that I learned about GraphQL(Graph Query languange)</li>
                            </ul>
                        </div>
                        <div className="education_proExpericence">
                            <h2>Education</h2>
                            <hr />
                            <h3>BACHELOR OF SCIENCE</h3>
                            <label>2016-2019</label><br /><br />
                            <label>Aggregate- 72%</label>
                            <div className="education_details">
                                <p>Dr.NGP arts and science college</p>
                                <p>Bachelor of Science in Information Technology</p>
                            </div>
                        </div>
                        <div className="education_proExpericence">
                            <h3>TAMILNADU HIGHER-SECONDARY EDUCATION EXAMINATION BOARD</h3>
                            <label>2014-2016</label><br /><br />
                            <label>Aggregate- 71%</label>
                            <div className="education_details">
                                <p>PSG Sarvajana Higher Secondary School</p>
                                <p>Computer Science</p>
                            </div>
                        </div>
                        <div className="education_proExpericence">
                            <h3>TAMILNADU SECONDARY EDUCATION EXAMINATION BOARD</h3>
                            <label>2013-2014</label><br /><br />
                            <label>Aggregate- 92%</label>
                            <div className="education_details">
                                <p>Sri Gopal Naidu Higher Secondary School</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default Education
