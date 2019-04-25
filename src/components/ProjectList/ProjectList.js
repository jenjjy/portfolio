import React from 'react';
import { GridList, GridListTile, withStyles } from '@material-ui/core/styles';
import styles from './index.scss';
import { IconButton } from '@material-ui/core';
import tileData from './tileData';
import gh from '../../images/gh.svg';

function TitlebarGridList() {
  for (let i = 0; i < tileData.length; i++) {
    tileData.map(tile => tile.img[i]);
  }

  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div key={tile.title} className="item-container">
          <div className="info-wrapper">
            <h2 className="project-title">{tile.title}</h2>
            <p className="description">{tile.description}</p>
            <p className="tech">
              {/* <span className="tech-stack">Tech Stack: </span> */}
              {tile.tech}
            </p>
          </div>

          <div className="img-wrapper">
            {/* <img
              src={tile.img.map(i => (
                <img src={i} alt="" />
              ))}
              alt={tile.title}
              className="project-img"
            /> */}
            <img src={tile.img[0]} alt={tile.title} className="project-img" />
          </div>
        </div>
      ))}
      <IconButton className="icon">
        <img src={gh} alt="See the code on Github" width="40" color="white" />
      </IconButton>
    </div>
  );
}

TitlebarGridList.propTypes = {};

export default withStyles(styles)(TitlebarGridList);
