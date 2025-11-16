import { Container } from '@mui/material';
import React, { useContext } from 'react';
import education from '../../assets/lottie/education.json';
import { ThemeContext } from '../../contexts/theme-context';
import { educationData } from '../../data/education-data';
import AnimationLottie from '../animation';
import EducationCard from './education-card';


function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme.quaternary }} className="py-16">
            <Container id="resume" className="min-h-fit">
                <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-center justify-center w-full gap-8">
                    {/* Animation Section */}
                    <div className="w-full p-4 ml-0 lg:ml-[7%] mt-4 pointer-events-none order-2 lg:order-1">
                        <AnimationLottie animationPath={education} />
                    </div>
                    
                    {/* Education Cards Section */}
                    <div className="w-full p-8 lg:p-4 lg:pr-8 flex flex-col items-start justify-center order-1 lg:order-2">
                        <h1 
                            className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-12"
                            style={{ color: theme.primary }}
                        >
                            Education
                        </h1>
                        <div className="w-full space-y-2">
                            {educationData.map(edu => (
                                <EducationCard
                                    key={edu.id}
                                    id={edu.id}
                                    institution={edu.institution}
                                    course={edu.course}
                                    startYear={edu.startYear}
                                    endYear={edu.endYear}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
