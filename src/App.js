import './styles/App.css';
import {React, useEffect, useState} from 'react';
import Home from './sections/home';
import Header from './sections/header';
import About from './sections/about';
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
    const [isMobile, setIsMobile] = useState(true);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setHeight(window.innerHeight);
        setIsMobile(window.innerWidth <= 768);
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

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
