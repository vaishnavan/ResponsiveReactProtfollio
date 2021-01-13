import React, { Component } from 'react';
import Navbar from '../navbarMain/Navbar';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './skill.css';

class Skill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skillData: [],
        };
    }

    componentDidMount() {
        axios.get('technologies.json')
            .then((res) => {
                this.setState({
                    skillData: res.data,
                });
            });
    }

    render() {
        const { skillData } = this.state;
        return (
            <>
                <Navbar />
                <div style={{ marginTop: "80px" }} className="skill_container">
                    <h2>Skills</h2>
                    <hr />
                    <div className="skills_head">
                        <h1>Languages</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.languages.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills_head">
                        <h1>Web Technologies</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.WebTechnologies.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills_head">
                        <h1>Tools</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.tools.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills_head">
                        <h1>Database</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.database.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills_head">
                        <h1>FrameWorks</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.Framework.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills_head">
                        <h1>Application Programming Interface</h1>
                        {skillData.map((skills, i) => {
                            return (
                                <div key={i} className="skillsMain">
                                    {skills.api.map((data, i) => {
                                        return (
                                            <div key={i} className="skills_images">
                                                <img src={data.imageURL} alt="no" />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Skill;
