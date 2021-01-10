import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dev:'MERN',
             fullStack:'Full Stack Dev'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                dev:"REACT",
                fullStack:'Web Devloper'
            })
        },5000)
    }
    
    render() {
        const { dev, fullStack } = this.state;
        return (
            <div>
                <div className="banner_main">
                    <div className="banner_content">
                        <h1>I'm Vaishnavan M,</h1>
                        <h3>{fullStack} = (<span>IN</span>) = <b>{dev}</b></h3>
                        <button>View Skills</button>
                    </div>
                    <div className="banner_img">
                        <img src="/images/work.png" alt="no" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Pagination;
