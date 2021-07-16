import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './icons'



function setLight() {
  localStorage.setItem("theme", "light-theme");
  document.body.className = "light-theme";
  setThemeIcon()
};

function setDark() {
  localStorage.setItem("theme", "dark-theme");
  document.body.className = "dark-theme";
  setThemeIcon()
};

(function () {
  if (localStorage.getItem('theme') === 'dark-theme') {
      setDark();
  } else {
      setLight();
  }
})();

var themeIcon

function setThemeIcon() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    themeIcon = <Icon icon="moon"/>
  }
  else {
    themeIcon = <Icon icon="sun"/>
  }
}


function Nav(props)  {
  const [theme, setTheme] = useState("light");
  function changeTheme(theme){
    if (theme === "dark") {
      setTheme('dark')
      setDark()
    }
    else {
      setTheme('light')
      setLight()
    }
  }
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

          <li className="" id="theme-nav">
            <div className="nav-link" id="theme-button">
              <span className="link-text">Change<br /> Theme</span>
              {themeIcon}
              <div id="theme-wrap">
                <ul className="themes">
                <Icon icon="carat-left"/>
                  <li className="theme-item" onClick={() => changeTheme('light')}>
                    <span className="theme-text">Light</span>
                    <Icon icon="sun"/>
                  </li>
                  <li className="theme-item" onClick={() => changeTheme('dark')}>
                    <span className="theme-text">Dark</span>
                    <Icon icon="moon"/>
                  </li>
                  <li className="theme-item">
                    <a className="theme-item" href="https://pseudotsuga-fir.github.io/90s-Portfolio/">
                    <span className="theme-text">90's</span>
                    <Icon icon="90's"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;