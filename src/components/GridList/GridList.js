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
    <div className="project-root">
      <GridList cellHeight={260} spacing={5} className="grid-list">
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img[0]} alt={tile.title} />

            <GridListTileBar
              title={tile.title}
              // titlePosition="top"
              subtitle={<span className="subtitle">{tile.tech}</span>}
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
