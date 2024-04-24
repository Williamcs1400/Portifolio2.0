import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import IconButton from '@mui/material/IconButton';
import hamburger from '../assets/hamburger.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import '../styles/App.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    // listener to check if the window is resized (mobile or desktop)
    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    
    const desktopHeader = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 className='header-text-item'>Sobre</h1>
            <h1 className='header-text-item'>Experiência</h1>
            <h1 className='header-text-item'>Projetos</h1>
            <h1 className='header-text-item'>Contato</h1>
        </div>
    );

    const mobileHeader = (
        <div className='header-text-item-button'>
            <IconButton aria-label="delete">
                <img src={hamburger} alt='hamburger' width={50} height={50} onClick={toggleDrawer(true)} />
            </IconButton>
        </div>
    );

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['Sobre', 'Experiência', 'Projetos', 'Contato'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText className='header-text-item' primary={text} style={{fontSize: 50}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <div style={{ marginTop: '50', display: 'flex', marginLeft: 100, marginRight: 100, justifyContent: 'space-between' }}>
            <div>
                <h1 className='header-text'>William Coelho</h1>
            </div>
            {isMobile ? mobileHeader : desktopHeader}
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Header;