import React from 'react';
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
            <img
              src={tile.img[0]}
              alt={tile.title}
              className={
                tile.title !== 'Main Street Brewing Co.' ? 'project-img' : 'msb'
              }
            />
          </div>
          <div className="tech-wrapper">
            <p className="tech">{tile.tech}</p>
            <GitHub link={tile.github} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectListColumns;
