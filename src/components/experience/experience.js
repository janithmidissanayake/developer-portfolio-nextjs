import { Container } from '@mui/material';
import React, { useContext } from 'react';
import experience from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/theme-context';
import { experienceData } from '../../data/experience-data';
import AnimationLottie from '../animation';
import ExperienceCard from './experience-card';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme.quaternary }} className="py-16">
            <Container id="experience" className="min-h-fit">
                <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-center justify-center w-full gap-8">
                    {/* Animation Section */}
                    <div className="w-full p-4 ml-0 lg:ml-[7%] mt-4 pointer-events-none order-2 lg:order-1">
                        <AnimationLottie animationPath={experience} />
                    </div>
                    
                    {/* Experience Cards Section */}
                    <div className="w-full p-8 lg:p-4 lg:pr-8 flex flex-col items-start justify-center order-1 lg:order-2">
                        <h1 
                            className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-12"
                            style={{ color: theme.primary }}
                        >
                            Experience
                        </h1>
                        <div className="w-full space-y-2">
                            {experienceData.map(exp => (
                                <ExperienceCard
                                    key={exp.id}
                                    id={exp.id}
                                    jobtitle={exp.jobtitle}
                                    company={exp.company}
                                    startYear={exp.startYear}
                                    endYear={exp.endYear} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
