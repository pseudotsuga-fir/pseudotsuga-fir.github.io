import React from 'react'
import Icon from './icons'
import {Link} from 'react-router-dom'


function Home(props) {
    return(
        <main>
            <div className="home">
                <div className="lead">
                    <h1 id="home-name">Hello, <br /> I'm Andrew Hepworth.</h1>
                    <h2 id="home-desc">I'm a developer currently studying computer science at Oregon State University. <br /> Check out my:</h2>
                </div>
                <div className="buttons">
                    <Link exact to="/projects" className="dir-button">
                        <Icon icon="projects"/>
                        <span className="button-text">Projects</span>
                    </Link>
                    <Link exact to="/resume" className="dir-button">
                        <Icon icon="resume"/>
                        <span className="button-text">Resume</span>
                    </Link>
                    <Link exact to="/contact" className="dir-button">
                        <Icon icon="contact"/>
                        <span className="button-text">Contact</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home;