import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'



export default function Projects() {
  return (
    
    <section className='mb-28 scroll-m-28' id='projects'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, idx) => (
                    <React.Fragment key={idx}>
                    <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

