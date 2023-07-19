import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dots-container">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
      </div>
      <div className="nav-container">
      <div className="sidebar-item">
          <i className="fa fa-tachometer"></i>
          <span>Dashboard</span>
        </div>
        <div className="sidebar-item">
          <i className="fa fa-home"></i>
          <span>Home</span>
        </div>
        <div className="sidebar-item">
          <i className="fa fa-calendar"></i>
          <span>Events</span>
        </div>
        <div className="sidebar-item">
          <i className="fa fa-blog"></i>
          <span>Blog</span>
        </div>
        <div className="sidebar-item">
          <i className="fa fa-book"></i>
          <span>Courses</span>
        </div>
      </div>
      <div className="exit-container">
        <i className="fa fa-times"></i>
      </div>
    </div>

    
  );
};

export default Sidebar;
