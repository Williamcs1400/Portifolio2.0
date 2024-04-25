import {React} from 'react';
import '../styles/App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import arara from '../assets/projectsPapers/arara.png'
import javaApi from '../assets/projectsPapers/java-api.jpg'
import androidApps from '../assets/projectsPapers/android.png';
import python from '../assets/projectsPapers/python.png';

import {
    githubApps,
    githubUrlArara,
    githubUrlBolao,
    githubUrlNews,
    textApps,
    textArara,
    textBolao, textNews,
    urlArara
} from "../util/texts";
import {toast, Toaster} from "react-hot-toast";

const Projects = ({isMobile}) => {

    function openUrl(url) {
        window.open(url, '_blank').focus();
    }

    const card = (name, linkGit, linkDemo, text, imgUrl) => (
        <Card sx={{margin: 1, maxWidth: isMobile ? 220 : 350}}>
            <CardMedia
                sx={{height: isMobile ? 140 : 200}}
                image={imgUrl}
                title={name}
            />
            <CardContent style={{height: isMobile ? 140 : 200}}>
                <text className='projects-card-title'>{name}</text>
                <br/>
                <text className='projects-card-content' style={{fontSize: isMobile ? 10 : 16}}>{text}</text>
            </CardContent>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: linkDemo ? 'space-around' : 'center'}}>
                <div className='projects-card-button' onClick={() => openUrl(linkGit)}>
                    Github
                </div>
                <div className='projects-card-button' onClick={() => linkDemo ? openUrl(linkDemo) : toast('Opção não disponível', {style: {fontSize: 18, backgroundColor: '#3B3B3B', color: 'white'}})}>
                    Explore
                </div>
            </div>
        </Card>
    )


    return (
        <div className='projects-page'>
            <text className='projects-subtitle'>Estes são alguns dos meus</text>
            <text className='projects-title'>Projetos</text>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                {card('Arara', githubUrlArara, urlArara, textArara, arara)}
                {card('Bolão', githubUrlBolao, null, textBolao, javaApi)}
                {card('Aplicativos Android', githubApps, null, textApps, androidApps)}
                {card('Agregador de notícias', githubUrlNews, null, textNews, python)}
            </div>
            <Toaster/>
        </div>
    );
}

export default Projects;