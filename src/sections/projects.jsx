import {React, useState} from 'react';
import '../styles/App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import arara from '../assets/projectsPapers/arara.png'
import javaApi from '../assets/projectsPapers/java-api.jpg'
import androidApps from '../assets/projectsPapers/android.png';
import python from '../assets/projectsPapers/python.png';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useTheme} from '@mui/material/styles';


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
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 4;
    const theme = useTheme();

    function openUrl(url) {
        window.open(url, '_blank').focus();
    }

    const card = (name, linkGit, linkDemo, text, imgUrl) => (
        <Card sx={{margin: 1, maxWidth: isMobile ? 230 : 350}}>
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
                <div className='projects-card-button'
                     onClick={() => linkDemo ? openUrl(linkDemo) : toast('Opção não disponível', {
                         style: {
                             fontSize: 18,
                             backgroundColor: '#3B3B3B',
                             color: 'white'
                         }
                     })}>
                    Explore
                </div>
            </div>
        </Card>
    )

    console.log(activeStep)

    return (
        <div className='projects-page' style={{height: isMobile ? '100%' : '100vh'}}>
            <text className='projects-subtitle'>Estes são alguns dos meus</text>
            <text className='projects-title'>Projetos</text>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                {activeStep === 0 || !isMobile ? card('Arara', githubUrlArara, urlArara, textArara, arara) : <div/>}
                {activeStep === 1 || !isMobile ? card('Bolão', githubUrlBolao, null, textBolao, javaApi) : <div/>}
                {activeStep === 2 || !isMobile ? card('Aplicativos Android', githubApps, null, textApps, androidApps) : <div/>}
                {activeStep === 3 || !isMobile ? card('Agregador de notícias', githubUrlNews, null, textNews, python): <div/>}

            </div>
            <Toaster/>

            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                style={{backgroundColor: 'transparent', justifyContent: 'center', marginTop: 20, marginBottom: 20, visibility: isMobile ? 'visible' : 'hidden'}}
                nextButton={
                    <Button
                        size="small"
                        style={{textTransform: 'none', justifyContent: 'center'}}
                        onClick={() =>
                            setActiveStep((prevActiveStep) => prevActiveStep + 1)
                        }
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft style={{transform: 'scale(2.5)'}}/>
                        ) : (
                            <KeyboardArrowRight style={{transform: 'scale(2.5)'}}/>
                        )}
                    </Button>
                }
                backButton={
                    <Button

                        onClick={() => {
                            setActiveStep((prevActiveStep) => prevActiveStep - 1)
                        }}
                        style={{textTransform: 'none', justifyContent: 'center'}}
                        disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight style={{transform: 'scale(2.5)'}}/>
                        ) : (
                            <KeyboardArrowLeft style={{transform: 'scale(2.5)'}}/>
                        )}
                    </Button>
                }
            />
        </div>
    );
}

export default Projects;