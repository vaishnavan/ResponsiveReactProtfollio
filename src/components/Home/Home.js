import React, { Component } from 'react';
import Content from '../Banner/BannerContent/Content';
import Pagination from '../Banner/Pagination';
import Navbar from '../navbarMain/Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Pagination />
                <Content />
            </div>
        );
    }
}

export default Home;
