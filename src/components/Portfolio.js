import React from 'react';
import Project from './Project';
const projects =[
    {
        name:"job-aid",
        description:"job-aid is an application that allows job seekers to look for a job using a job title and zipcode",
        github:"https://github.com/hanandadras/job-aid",
        screenshot:"https://github.com/hectorromo06/job-aid/raw/main/assets/images/job-aid-screenshot.png",
    },
    {
        name:"moviesNme",
        description:"MoviesNme is a movies streaming app using OMDB ( http://www.omdbapi.com/) to fetch a large library of movies and make it available to movie lovers.",
        github:"https://github.com/MeenaAlemiJalal/moviesNme",
       screenshot:"https://user-images.githubusercontent.com/91281668/150245036-eed4c5a7-4f2b-4bfe-ad97-fd42d951d445.png",
    },
    {
        name:"ArtMart",
        description:"This is an online gallery/blog/marketplace for artists to showcase their work, show a description fo their work, get fans reactions and sell their pieces if anyone is interested.",
        github:"https://github.com/hanandadras/ArtMart",
        screenshot:"https://artmart-hd.herokuapp.com/",
    },
]

function Portfolio() {

    return(
        <section className="portfolio">
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

