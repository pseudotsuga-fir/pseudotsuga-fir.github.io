import React from 'react'
import Nav from './components/nav'
import Home from './components/home'
import Projects from './components/projects'
import Resume from './components/resume'
import Contact from "./components/contact"
import ScrollUp from "./components/scroll-up"
import './index.css'

import {HashRouter, Route} from 'react-router-dom'

function App() {
    return (
        <div className="page-container">
        <HashRouter>        
            <Nav />
                <ScrollUp>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/contact" exact component={Contact}/>
                </ScrollUp>
        </HashRouter>
        </div>
    )
}

export default App