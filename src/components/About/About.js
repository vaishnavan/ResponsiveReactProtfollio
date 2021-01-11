import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar';
import { Icon } from 'semantic-ui-react';
import './about.css';

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
        };
    }

    read = () =>{
        this.setState({
            show:!this.state.show,
        });
    }
    
    render() {
        const { show } = this.state;
        return (
            <div>
                <Navbar />
                <div style={{marginTop:"80px"}} className="about_container">
                    <div className="about_head">
                        <h2>About Me</h2>
                        <hr/>
                        <p>A computer science majored individual with practical hands-on-approach in Java, Python and SQL. A dedicated, organized person and also an excellent team worker. 
                            Keen and very willing to learn and develop new skills. My passion is all about creating real elegant looking websites.</p>
                    </div>
                    <div className="about_banner">
                        <img src="https://c0.wallpaperflare.com/preview/88/683/790/editor-code-headphones-programming.jpg" alt="no" />
                    </div>
                    <div className="about_content">
                        <h2>MERN Stack Developer</h2>
                        <hr/>
                        <ul type="circle">
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Name:</b> Vaishnavan M</li>
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Degree:</b> Bachelor of science in Information technology</li>
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Techology:</b> HTML5, CSS3, JavaScript, Bootstrap, java, springboot, Reactjs, Nodejs, mongodb, firebase, Postman, GraphQL, Apache Kafha, Sematic-UI-React.</li>
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Date Of Birth:</b> 05/03/1999</li>
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Email:</b> Sakthi4645@gmail.com</li>
                            <li><Icon name="arrow alternate circle right" size="large" color="blue" /><b>Phone.no:</b> +91 9047609410</li>
                        </ul>
                        {show ? 
                        <p>As a Full-stack Developer, I have lots of interest in the designing website in a very attractive way and give some animation effects makes it look awesome while you viewing it and also have the capability of managing work pressure.
                            I have a very good hands-on experience in both front-end and Back-end development and current I'm learning GraphQL(Graph Query languange) to expand my skills in API(Application program Interface) creation.<span onClick={this.read} >ReadLess</span>
                        </p>
                        :
                        <p>As a Full-stack Developer, I have lots of interest in the designing website in a very attractive way and give some animation effects makes it look awesome while you viewing it and also have the capability of managing work pressure....<span onClick={this.read} >ReadMore</span></p>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;
