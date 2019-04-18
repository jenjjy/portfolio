import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './index.scss';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import github from '../../images/icons/github.png';
import gh from '../../images/gh.svg';

function TitlebarGridList() {
  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div key={tile.title} className="item-container">
          <div className="info-wrapper">
            <h2>{tile.title}</h2>
            <p className="description">{tile.description}</p>
            <p className="tech">
              <span clasName="tech-stack">Tech Stack: </span>
              {tile.tech}
            </p>
            <IconButton className="icon">
              <img
                src={gh}
                alt="See the code on Github"
                width="40"
                color="white"
              />
            </IconButton>
          </div>
          <div clasName="img-wrapper">
            <img src={tile.img[0]} alt={tile.title} className="project-img" />
          </div>
        </div>
      ))}
    </div>
  );
}

TitlebarGridList.propTypes = {};

export default withStyles(styles)(TitlebarGridList);
