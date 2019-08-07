import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ScrollReveal from 'scrollreveal'

// Components
import Splash from './Splash'
import Bio from './Bio'
import Toolbox from './Toolbox'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Contact from './Contact'

class App extends Component {

    componentDidMount = () => {
        // Set smooth scroll appearances
        var classLists = ['#bio-content', '.tools-container', '.portfolio-project', '.job-content', '#contacts-bar']
        var fadeSettings = {
            delay: 100,
            duration: 1000,
            reset: false
        }
        for (var i = 0; i < classLists.length; i++){
            ScrollReveal().reveal(classLists[i], fadeSettings);
        }
    }

    render() {
        return(
            <main>
                <Splash />
                <Bio />
                <Toolbox />
                <Portfolio />
                <Experience />
                <Contact />
            </main>
        )
    }
}

export default hot(module)(App)
