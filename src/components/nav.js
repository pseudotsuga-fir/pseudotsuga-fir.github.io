import React from 'react'
import {NavLink} from 'react-router-dom'
import Icon from './icons'

function Nav(props)  {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item" id="logo">
            <NavLink exact to="/" activeClassName="nav-link active" className="nav-link" id="logo-link">
              <p id="a">A<br /><br /></p>
              <p id="h"><br />H</p>
            </NavLink>
          </li>          

          <li className="nav-item">
            <NavLink exact to="/" activeClassName="nav-link active" className="nav-link">
              <span className="link-text">Home</span>
              <Icon icon="home"/>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="nav-link active" className="nav-link">
              <span className="link-text">Projects</span>
              <Icon icon="projects"/>
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/resume" exact activeClassName="nav-link active" className="nav-link" id="resume">
              <span className="link-text">Resume</span>
              <Icon icon="resume"/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="nav-link active" className="nav-link">
              <span className="link-text">Contact</span>
              <Icon icon="contact"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;