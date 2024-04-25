import { React, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import hamburger from '../assets/icons/hamburger.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import '../styles/App.css';
import {ScrollRef} from "../util/ScrollRef";

const Header = ({handleScroll, isMobile}) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    
    const desktopHeader = (
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: 100 }}>
            <h1 className='header-text-item' onClick={() => handleScroll(ScrollRef.About)}>Sobre</h1>
            <h1 className='header-text-item' onClick={() => handleScroll(ScrollRef.Experience)}>Experiência</h1>
            <h1 className='header-text-item' onClick={() => handleScroll(ScrollRef.Projects)}>Projetos</h1>
            <h1 className='header-text-item' onClick={() => handleScroll(ScrollRef.Contact)}>Contato</h1>
        </div>
    );

    const mobileHeader = (
        <div className='header-text-item-button' style={{marginRight: 10}}>
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
                  <ListItemText className='header-text-item' primary={text} style={{fontSize: 50}} onClick={() => handleScroll(index + 1)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <div style={{ marginTop: '50', display: 'flex', justifyContent: 'space-between', minHeight: 100, maxHeight: 100 }}>
            <div>
                <h1 className='header-text' style={{marginLeft: isMobile ? 40 : 100}}>William Coelho</h1>
            </div>
            {isMobile ? mobileHeader : desktopHeader}
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Header;