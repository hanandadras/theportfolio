import React from 'react';
import Project from './Project';
const projects =[
    {
        name:"project 1",
        description:"project 1 description",
        github:"githubURL",
        screenshot:"screenshot URL",
    },
    {
        name:"project 2",
        description:"project 2 description",
        github:"githubURL",
        screenshot:"screenshot URL",
    },
    {
        name:"project 3",
        description:"project 3 description",
        github:"githubURL",
        screenshot:"screenshot URL",
    },
]

function Portfolio() {

    return(
        <section className="my-5">
            <h1 id="portfolio">Portfolio:</h1>
            {projects.map(project=>(
                <Project
                name={project.name}
                description={project.description}
                github={project.github}
                screenshot={project.screenshot}
                />
            ))}

        </section>
    )
}
export default Portfolio;