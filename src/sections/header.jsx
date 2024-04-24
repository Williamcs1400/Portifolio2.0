import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import IconButton from '@mui/material/IconButton';
import {hamburger} from '../assets/hamburger.png';
import '../styles/App.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    console.log(isMobile);

    const desktopHeader = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 className='header-text-item'>Sobre</h1>
            <h1 className='header-text-item'>Experiência</h1>
            <h1 className='header-text-item'>Projetos</h1>
            <h1 className='header-text-item'>Contato</h1>
        </div>
    );

    const mobileHeader = (
        <div>
            <IconButton aria-label="delete">
                <img src={hamburger} alt='hamburger' />
            </IconButton>
        </div>
    );

    return (
        <div style={{ marginTop: '50', display: 'flex', marginLeft: 100, marginRight: 100, justifyContent: 'space-between' }}>
            <div>
                <h1 className='header-text'>William Coelho</h1>
            </div>
            {isMobile ? mobileHeader : desktopHeader}
            {/* <div style={{display: 'flex', flexDirection: 'row'}}>
                <h1 className='header-text-item'>Sobre</h1>
                <h1 className='header-text-item'>Experiência</h1>
                <h1 className='header-text-item'>Projetos</h1>
                <h1 className='header-text-item'>Contato</h1>
            </div> */}
        </div>
    );
}

export default Header;