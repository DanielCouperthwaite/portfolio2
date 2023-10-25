import { useState, useEffect } from 'react'
import './Tech.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"
import ParticleEffectAbout from '../About/ParticleEffectAbout'


export default function Tech () {

    const [loadOne, setLoadOne] =useState(false)
    const [loadTwo, setLoadTwo] =useState(false)

    useEffect(() => {

            window.scrollTo(0, 0)

            setTimeout(() => setLoadOne(true) , 500);
            setTimeout(() => setLoadTwo(true) , 1000);
           
        }, [])

    return (
        <>

            <ParticleEffectAbout />

            <Box>
                <Grow in={loadOne}>
                    <div className="about">
                    
                                        <div className='social-holder' style={{marginRight: "10px"}}>
                                        <Link to="/home">
                                            
                                                <p>{"x"}</p>
                                            
                                        </Link>
                                        </div>  
                    
                        
                        <h3 style={{marginTop: "-20px"}}>Technical Skills</h3>
                        <p>What's a developer without their tools? Here you can see some of the tech I have experience building sites, APIs and apps with.</p>
                        <p>This website built with Javascript, React and a little bit of love.</p>
                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">
                        <div className='tech-info'>
                            <p><strong>Languages: </strong>Javascript, Typescript, C#, .NET</p>
                            <p><strong>Front End: </strong>React, React Native, HTML5, CSS3, Tailwind CSS</p>
                            <p><strong>Back End: </strong>Express, test driven development with Jest, PostgreSQL, Firebase</p>
                            <p><strong>Development: </strong>AGILE Methodologies, paired programming, working in and managing scrums</p>
                        </div>
                        
                        <div>
                                <Link to="/home">
                                    <button style={{maxWidth: "200px"}}>
                                        <p>Back</p>
                                    </button>   
                                </Link>
                            </div>
                    
                    
                    </div>
                </Grow> 
            </Box>    
        </>
    )
}