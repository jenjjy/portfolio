import React from 'react';
import { GridList, GridListTile, withStyles } from '@material-ui/core/styles';
import styles from '../index.scss';
import { IconButton } from '@material-ui/core';
import tileData from '../tileData';

/* Images */
import BoomHome from '../../../images/projects/BoomHome.png';
import BoomItems from '../../../images/projects/BoomItems.png';
import BoomShare from '../../../images/projects/BoomShare.png';
import calm from '../../../images/projects/calm.png';
import msb from '../../../images/projects/mainstbrewing.gif';
import fbOnboard from '../../../images/projects/FBOnboardGiphy.gif';
import R10 from '../../../images/projects/R10.png';
import calmversation from '../../../images/projects/calmversation.png';

function TitlebarGridList() {
  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div className="item-container">
          {tile.title == 'Main Street Brewing Co.' ? (
            <div className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
              </div>

              <div className="img-wrapper">
                <img src={msb} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}

          {tile.title == 'R10' ? (
            <div className="direction-rev">
              <div className="info-wrapper info-rev">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={R10}
                  alt="R10 conference schedule app"
                  className="r10-img"
                />
              </div>
            </div>
          ) : null}

          {tile.title == 'Food Buddy' ? (
            <div className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={fbOnboard}
                  alt="Food Buddy App"
                  className="project-img"
                />
              </div>
            </div>
          ) : null}

          {tile.title == 'BoomCity' ? (
            <div className="direction-rev">
              <div className="info-wrapper  info-rev">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
              </div>

              <div className="img-wrapper">
                <img src={BoomItems} alt={tile.title} className="project-img" />
              </div>
            </div>
          ) : null}

          {tile.title == 'calmversation' ? (
            <div className="direction">
              <div className="info-wrapper">
                <h2 className="project-title">{tile.title}</h2>
                <p className="description">{tile.description}</p>
                <p className="tech">{tile.tech}</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={calmversation}
                  alt={tile.title}
                  className="project-img"
                />
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
