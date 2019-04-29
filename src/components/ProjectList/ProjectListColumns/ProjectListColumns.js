import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../index.scss';
import tileData from '../tileData';

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
        </div>
      ))}
    </div>
  );
}

ProjectListColumns.propTypes = {};

export default withStyles(styles)(ProjectListColumns);
