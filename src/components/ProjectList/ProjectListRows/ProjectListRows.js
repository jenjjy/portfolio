import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import styles from '../index.scss';
import tileData from '../tileData';
import gh from '../../../images/gh.svg';

function TitlebarGridList() {
  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div key={tile.id} className="item-container">
          {tile.title === 'Hackathon - Life of Litter' ? (
            <div key={tile.id} className="direction-rev">
              <div className="info-wrapper info-rev">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img src={tile.img} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}

          {tile.title === 'Main Street Brewing Co.' ? (
            <div className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img src={tile.img} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}

          {tile.title === 'R10' ? (
            <div key={tile.id} className="direction-rev">
              <div className="info-wrapper info-rev">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img src={tile.img} alt={tile.title} className="r10-img" />
              </div>
            </div>
          ) : null}

          {tile.title === 'Food Buddy' ? (
            <div key={tile.id} className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img src={tile.img} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}

          {tile.title === 'BoomCity' ? (
            <div key={tile.id} className="direction-rev">
              <div className="info-wrapper  info-rev">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img
                  src={tile.img[1]}
                  alt={tile.title}
                  className="project-img"
                />
              </div>
            </div>
          ) : null}

          {tile.title === 'calmversation' ? (
            <div key={tile.id} className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
                <Button
                  className="icon"
                  href={tile.github}
                  color="default"
                  variant="contained"
                  size="small"
                >
                  <img
                    className="github-icon"
                    src={gh}
                    alt="See the code on Github"
                  />
                  <p className="text">View More</p>
                </Button>
              </div>

              <div className="img-wrapper">
                <img src={tile.img} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

TitlebarGridList.propTypes = {};

export default withStyles(styles)(TitlebarGridList);
