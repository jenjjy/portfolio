import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';
import tileData from '../tileData';
import GitHub from '../../GithubBtn';

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
          <GitHub link={tile.github} />
        </div>
      ))}
    </div>
  );
}

ProjectListColumns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ProjectListColumns;
