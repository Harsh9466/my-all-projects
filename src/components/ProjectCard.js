import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          window.location.href = project.url;
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={project.img}
          alt="green iguana"
        />
        <CardContent
          sx={{
            background: "aliceblue",
            paddingBottom: "5px",
            paddingX: "8px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.content}
          </Typography>
          <Typography
            sx={{ marginTop: "10px" }}
            variant="caption"
            display="block"
            gutterBottom
          >
            12 August, 2020
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
