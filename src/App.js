import React, { Component } from 'react';
import Navbar from './components/navbarMain/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="banner_img">
          <img  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="no image" />
        </div>
      </>
    )
  }
}

export default App;
