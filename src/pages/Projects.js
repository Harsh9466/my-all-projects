import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/img/project1.jpg";

const projectDetails = [
  {
    img: project1,
    title: "Advice Generator",
    content:
      "This project generates a random advice everytime when you refreshes the page.",
    url: "https://harsh9466.github.io/advice-generator-app-using-js",
  },
];

const Projects = () => {
  return (
    <div className="m-0 p-0 pt-3">
      <Typography className="text-center" variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid
        container
        direction="row"
        style={{ marginTop: "15px" }}
        justifyContent="center"
        // alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      >
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        {projectDetails.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
