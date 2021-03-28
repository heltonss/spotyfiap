import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import VolumeIcon from 'assets/images/volume.svg';
import ShuffleIcon from 'assets/images/shuffle.svg';
import BackwardIcon from 'assets/images/backward.svg';
import PlayIcon from 'assets/images/play.svg';
import PauseIcon from 'assets/images/pause.svg';
import ForwardIcon from 'assets/images/forward.svg';
import RepeatIcon from 'assets/images/repeat.svg';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from 'store/ducks/player';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './style';

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  duration,
  position,
  positionShown,
  setPosition,
  handlePosition,
  progress,
  setVolume
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        onPlaying={playing}
        url={player.currentSong.file}
        onFinishedPlaying={next}
        playStatus={player.status}
        position={player.position}
        volume={player.volume}
      />
    )}
    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img src={player.currentSong.thumbnail} alt={player.title} />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="play" />
          </button>
        )}
        <button onClick={next}>
          <img src={ForwardIcon} alt="foward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>
      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed768' }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'block' }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

const msToTime = (duration) => {
  if (!duration) return null;
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress: parseInt((state.player.positionShown || state.player.position) * (1000 / state.player.duration), 10) || 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
