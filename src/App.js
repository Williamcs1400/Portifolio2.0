import './styles/App.css';
import {React, useEffect, useRef, useState} from 'react';
import Home from './sections/home';
import Header from './sections/header';
import About from './sections/about';
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [aboutRef, setAboutRef] = useState(useRef(null));
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setHeight(window.innerHeight);
        setIsMobile(window.innerWidth <= 768);
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
                <Header handleScroll={handleScroll} isMobile={isMobile}/>
                <Home isMobile={isMobile}/>
                <About isMobile={isMobile}/>
                <Experience isMobile={isMobile}/>
                <Projects isMobile={isMobile}/>
                <Contact isMobile={isMobile} handleScroll={handleScroll}/>
            </header>
        </div>
    );
}

export default App;
