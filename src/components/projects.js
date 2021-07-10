import React from 'react'
import tempImg from './temp-img.jpg'
import gitlogo from './gitLogo.png'
import {Link} from 'react-router-dom'
import Icon from './icons'


function Projects(props) {
    return(
        <main>
            <div className="projects">
                <h1>Projects</h1>
                <div className="project-wrp">
                    <div className="left-clm">
                        <div className="project-title">
                            <h2>This Portfolio</h2>
                            <img src={tempImg} alt="?"/>
                            <p>Although not the typical web application you might see using React, this portfolio was indeed made using the React framework. There were a few reasons for choosing to use React as opposed to vanilla JavaScript, the biggest being that it allows seamless navigation. I also just enjoy using React.</p>
                        </div>
                    </div>
                    <div className="right-clm">
                        <div className="made">
                            <h2>Made using</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">React</li>
                                <li className="proj-item">React-pdf</li>
                                <li className="proj-item">ReactRouter and HashRouter</li>
                                <li className="proj-item">A lot of CSS</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Featrure 1</li>
                                <li className="proj-item">Featrure 2</li>
                                <li className="proj-item">Featrure 3</li>
                                <li className="proj-item">Featrure 4</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="git-link">
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button">
                                    <img src={gitlogo} alt="?"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button-link">
                                    <span className="proj-button-text">Source</span>
                                </a>
                            </div>
                            <div className="view-link">
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button">
                                    <Icon icon="desktop"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button-link">
                                    <span className="proj-button-text">Live view</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="project-wrp">
                    <div className="left-clm">
                        <div className="project-title">
                            <h2>Project Title</h2>
                            <img src={tempImg} alt="?"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div className="right-clm">
                        <div className="made">
                            <h2>Made using</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="proj-item">Duis eleifend ipsum nec nisi ornare pharetra.</li>
                                <li className="proj-item">Suspendisse condimentum augue quis finibus vulputate.</li>
                                <li className="proj-item">Vestibulum quis quam maximus, dignissim lectus a, porttitor mauris.</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Featrure 1</li>
                                <li className="proj-item">Featrure 2</li>
                                <li className="proj-item">Featrure 3</li>
                                <li className="proj-item">Featrure 4</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="git-link">
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button">
                                    <img src={gitlogo} alt="?"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button-link">
                                    <span className="proj-button-text">Source</span>
                                </a>
                            </div>
                            <div className="view-link">
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button">
                                    <Icon icon="desktop"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="//www.github.com" className="proj-button-link">
                                    <span className="proj-button-text">Live view</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </main>
    )
}

export default Projects;