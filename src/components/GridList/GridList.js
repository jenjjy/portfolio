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
// import tileData from './tileData';
import github from '../../images/icons/github.png';
import gh from '../../images/gh.svg';

/** Project Imports  */
import calm from '../../images/projects/calm.png';
import msb from '../../images/projects/mainstbrewing.gif';
import fbGroup from '../../images/projects/FBGroupGiphy.gif';
import fbOnboard from '../../images/projects/FBOnboardGiphy.gif';
import R10schedule from '../../images/projects/R10schedule.png';
import R10session from '../../images/projects/R10session.png';

const tileData = [
  {
    img: msb,
    title: 'Main Street Brewing Co.',
    tech: 'React Native, GraphCool',
    featured: true
  },
  {
    img: [R10schedule, R10session],
    title: 'R10',
    tech: 'React-Native, JavaScript'
  },
  {
    img: fbOnboard,
    title: 'Food Buddy',
    tech: 'Meteor, MongoDB, React, Material UI, Goole Maps API'
  },
  {
    img: fbGroup,
    title: 'BoomCity',
    tech: 'React, Redux, GraphQL, Apollo-Client,Material UI'
  },
  {
    img: calm,
    title: 'calmversation',
    tech: 'JavaScript, jQuery, PHP, WordPress',
    link: 'https://calmversation.org/'
  },
  {
    img: fbOnboard,
    title: 'Inhabitent',
    tech: 'JavaScript, jQuery, PHP, SASS, WordPress'
  },
  { img: fbOnboard, title: 'Tennis Pong', tech: 'Object-Oriented Programming' }
];
function TitlebarGridList() {
  return (
    <div className="project-root">
      <GridList cellHeight={260} spacing={5} className="grid-list">
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              // titlePosition="top"
              subtitle={
                <span className="subtitle">Tech Used: {tile.tech}</span>
              }
              actionIcon={
                <IconButton className="icon">
                  <img
                    src={gh}
                    alt="See the code on Github"
                    width="40"
                    color="white"
                  />
                </IconButton>
              }
              // actionPosition="left"
              className="titlebar"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {};

export default withStyles(styles)(TitlebarGridList);
