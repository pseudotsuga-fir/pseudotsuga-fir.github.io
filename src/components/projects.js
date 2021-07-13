import React from 'react'
import tempImg from './temp-img.jpg'
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
                                    <Icon icon="github"/>
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