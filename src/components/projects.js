import React from 'react'
import trailGif from './trails.gif'
import trailImg from './trails.jpg'
import rubyGif from './ruby.gif'
import rubyImg from './ruby.jpg'
import portGif from './portfolio.gif'
import portImg from './portfolio.jpg'
import Icon from './icons'


function Projects(props) {
    return(
        <main>
            <div className="projects">
                <h1>Projects</h1>
                <div className="project-wrp">
                    <div className="left-clm">
                        <div className="project-title">
                            <a href="https://trails.dog" rel="noreferrer" target="_blank">Trails.Dog</a>
                            <a href="https://trails.dog" rel="noreferrer" target="_blank">
                                <div className='img-wrap'><img src={trailGif} alt="?" className='animated'/></div>
                                <div className='img-wrap'><img src={trailImg} alt="?" className='still'/></div>
                            </a>
                            <p>Trails.Dog (pronounced trails dot dog) is a trail mapping web application designed for dog walking. This application was built on Django with the goal of making a GIS focused web application. GIS technology used includes mapbox-gl js, mapbox-gl-draw, postGIS, and GEOS geometry just to name a few. This project was an exploration of the full stack development life cycle using a mix of common web application technologies. I wanted to explore everything from front-end development, database management, devops, and web server administration. This project is a work in progress with things such as mobile support, CI/CD, and an API still being worked on.</p>
                            <p>*Note: The source for this project is currently private.</p>
                        </div>
                    </div>
                    <div className="right-clm">
                        <div className="made">
                            <h2>Made using</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Django</li>
                                <li className="proj-item">PostgreSQL</li>
                                <li className="proj-item">postGIS</li>
                                <li className="proj-item">mapbox-gl-js</li>
                                <li className="proj-item">NGINX</li>
                                <li className="proj-item">SASS</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Fuzzy Searching</li>
                                <li className="proj-item">Live Map geoJSON Editor</li>
                                <li className="proj-item">Static Map Image Rendering</li>
                                <li className="proj-item">SEO optimization</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="git-link">
                                <a rel="noreferrer" target="_blank" className="proj-button disabled">
                                    <Icon icon="github"/>
                                </a>
                                <a rel="noreferrer" target="_blank" className="proj-button-link disabled">
                                    <span className="proj-button-text">Source Not Available</span>
                                </a>
                            </div>
                            <div className="view-link">
                                <a rel="noreferrer" target="_blank" href="https://trails.dog" className="proj-button">
                                    <Icon icon="desktop"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://trails.dog" className="proj-button-link">
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
                            <a href="https://github.com/pseudotsuga-fir/cs362-coad-resources" rel="noreferrer" target="_blank">Legacy Application Testing</a>
                            <div className='img-wrap'><img src={rubyGif} alt="?" className='animated'/></div>
                            <div className='img-wrap'><img src={rubyImg} alt="?" className='still'/></div>
                            <p>This is a team project I worked on to experience legacy code. We adopted a legacy application built on Ruby on Rails and got the entire application under test using RSpec. The goal of this project was to become familiar with handling and testing legacy software. We also used test driven development to implement changes in the application. Check out the repository’s commit history and closed issues to get a feel for the workflow and testing process.</p>
                        </div>
                    </div>
                    <div className="right-clm">
                        <div className="made">
                            <h2>Made using</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Ruby on Rails</li>
                                <li className="proj-item">RSpec</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Rails Application</li>
                                <li className="proj-item">Complete RSpec test coverage</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="git-link">
                                <a rel="noreferrer" href="https://github.com/pseudotsuga-fir/cs362-coad-resources" target="_blank" className="proj-button">
                                    <Icon icon="github"/>
                                </a>
                                <a rel="noreferrer" href="https://github.com/pseudotsuga-fir/cs362-coad-resources" target="_blank" className="proj-button-link">
                                    <span className="proj-button-text">Source</span>
                                </a>
                            </div>
                            <div className="view-link">
                                <a rel="noreferrer" target="_blank" href="https://github.com/pseudotsuga-fir/cs362-coad-resources" className="proj-button">
                                    <Icon icon="desktop"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/pseudotsuga-fir/cs362-coad-resources" className="proj-button-link">
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
                            <a href="/" rel="noreferrer" target="_blank">This Portfolio</a>
                            <div className='img-wrap'><img src={portGif} alt="?" className='animated'/></div>
                            <div className='img-wrap'><img src={portImg} alt="?" className='still'/></div>
                            <p>Although not the typical website you might see using React, this portfolio was indeed made using the React framework. There were a few reasons for choosing to use React as opposed to vanilla JavaScript, the biggest being that it allows seamless navigation between pages. This simple static portfolio website was my way of trying out React.</p>
                        </div>
                    </div>
                    <div className="right-clm">
                        <div className="made">
                            <h2>Made using</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">React</li>
                                <li className="proj-item">Firebase</li>
                                <li className="proj-item">A lot of CSS</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <ul className="proj-lst">
                                <li className="proj-item">Live PDF viewer</li>
                                <li className="proj-item">Theme changer</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="git-link">
                                <a rel="noreferrer" target="_blank" href="https://github.com/pseudotsuga-fir/pseudotsuga-fir.github.io" className="proj-button">
                                    <Icon icon="github"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/pseudotsuga-fir/pseudotsuga-fir.github.io" className="proj-button-link">
                                    <span className="proj-button-text">Source</span>
                                </a>
                            </div>
                            <div className="view-link">
                                <a rel="noreferrer" target="_blank" href="/" className="proj-button">
                                    <Icon icon="desktop"/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="/" className="proj-button-link">
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