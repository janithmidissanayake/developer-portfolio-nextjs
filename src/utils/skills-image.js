import aws from '../assets/svg/skills/aws.svg'
import c from '../assets/svg/skills/c.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import css from '../assets/svg/skills/css.svg'
import docker from '../assets/svg/skills/docker.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import redux from '../assets/svg/skills/redux.svg'
import antdesign from '../assets/svg/skills/antdesign.svg'
import kafka from '../assets/svg/skills/kafka.svg'
import react from '../assets/svg/skills/react.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import springboot from '../assets/svg/skills/springboot.svg'
import microsoftSQL from '../assets/svg/skills/microsoftSQL.svg'
import jest from '../assets/svg/skills/jest.svg'

import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'



import figma from '../assets/svg/skills/figma.svg'

import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'

import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
       
        case 'html':
            return html;
       
        case 'docker':
            return docker;
        case 'spring boot':
            return springboot;    
             
       
        case 'css':
            return css;
        
        case 'javascript':
            return javascript;
       
        case 'react':
            return react;
        case 'redux':
            return redux;

        
        case 'typescript':
            return typescript;
        
       case 'kafka':
            return kafka;

       case 'next js':
            return nextJS;
       
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
       
        case 'c':
            return c;
        
        case 'c#':
            return csharp;
      
        case 'java':
            return java;
        case 'jest':
            return jest;
        
        case 'microsoft sql':
            return microsoftSQL;

        case 'aws':
            return aws;
        
        case 'git':
            return git;
              
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
      
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'ant design':
            return antdesign;
       
        case 'figma':
            return figma;
                   
        case 'microsoft office':
            return microsoftoffice;
       
        case 'canva':
            return canva;
        default:
            break;
    }
}
