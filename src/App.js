import './styles/App.css';
import {React, useEffect, useRef, useState} from 'react';
import Home from './sections/home';
import Header from './sections/header';
import About from './sections/about';
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
    const [aboutRef, setAboutRef] = useState(useRef(null));
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    console.log(height);

    function handleScroll(offset) {
        window.scrollTo({top: height * offset, behavior: 'smooth'});
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header handleScroll={handleScroll}/>
                <Home/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
            </header>
        </div>
    );
}

export default App;
