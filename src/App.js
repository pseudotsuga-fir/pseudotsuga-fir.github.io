import React from 'react'
import Nav from './nav'
import Home from './home'
import Projects from './projects'
import Resume from './resume'
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
                </Switch>
        </Router>
        </div>
    )
}

export default App