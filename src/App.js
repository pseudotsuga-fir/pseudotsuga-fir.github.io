import React from 'react'
import Nav from './components/nav'
import Home from './components/home'
import Projects from './components/projects'
import Resume from './components/resume'
import Contact from "./components/contact"
import './index.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div class="wrapper">
        <Router>        
            <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
        </Router>
        </div>
    )
}

export default App