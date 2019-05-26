import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './index.scss';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    console.log('VP', this.props);

    return (
      <div className="video-wrapper">
        {this.state.width < 400 ? (
          <ReactPlayer
            url={this.props.link}
            playing
            muted={true}
            height={200}
            width={330}
            loop={true}
            className="video"
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              facebook: {
                appId: '12345'
              }
            }}
          />
        ) : (
          <ReactPlayer
            url={this.props.link}
            playing
            muted={true}
            height={250}
            width={400}
            loop={true}
            className="video"
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              facebook: {
                appId: '12345'
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default VideoPlayer;
