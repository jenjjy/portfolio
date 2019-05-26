import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import styles from '../index.scss';
import tileData from '../tileData';
import gh from '../../../images/gh.svg';

function ProjectListColumns() {
  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div key={tile.title} className="item-container">
          <div className="info-wrapper">
            <h2 className="project-title">{tile.title}</h2>
            <p className="description">{tile.description}</p>
          </div>

          <div className="img-wrapper">
            <img src={tile.img[0]} alt={tile.title} className="project-img" />
          </div>

          <p className="tech">{tile.tech}</p>
          <Button
            className="icon"
            href={tile.github}
            color="default"
            variant="contained"
            size="small"
          >
            <img className="github-icon" src={gh} alt="See code on Github" />
            <p className="text">View More</p>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default withStyles(styles)(ProjectListColumns);
