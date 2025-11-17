import React, { useContext, useState, useRef } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './project-card/project-card';

function Projects() {

    const { theme } = useContext(ThemeContext);
    const [showAll, setShowAll] = useState(false);
    const projectsContainerRef = useRef(null);

    const handleToggle = () => {
        const wasExpanded = showAll;
        setShowAll(!showAll);
        
        if (!wasExpanded) {
            // Scroll down smoothly after expanding to show more projects
            setTimeout(() => {
                window.scrollBy({ 
                    top: 300, 
                    behavior: 'smooth' 
                });
            }, 100);
        } else {
            // Scroll back up when collapsing
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };


    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles.projects} id="projects" style={{ background: theme.quaternary }}>
                    <div className={styles.projectsHeader}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer} ref={projectsContainerRef}>
                            {(showAll ? projectsData : projectsData.slice(0, 3)).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={`${project.id}-${theme.type}`}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className={styles.projectsViewAll}>
                                <button 
                                    onClick={handleToggle}
                                    className="text-[#8B98A5] bg-[#15202B] w-[50px] h-[50px] p-2 text-xl rounded-[50%] cursor-pointer transition-all hover:bg-[#1D9BF0] hover:text-[#15202B] hover:scale-110"
                                    style={{ transform: showAll ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'all 0.3s' }}
                                    aria-label={showAll ? 'Show Less' : 'View All'}
                                >
                                    <HiArrowRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
