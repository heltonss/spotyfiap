import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClockIcon from "assets/images/clock.svg";
import PlusIcon from "assets/images/plus.svg";
import { Container, Header, SongList, SongItem } from "../style";

import { Creators as PlayerActions } from "../../../store/ducks/player";

const Details = ({ currentSong, playlistDetails, loadSong }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const { title, thumbnail, songs } = playlistDetails;

  return (
    <Container>
      <Header>
        <img src={thumbnail} alt={title} />
        <div>
          <span>playlist</span>
          <h1>{title}</h1>
          {!!songs && <p>{songs.length} músicas</p>}

          <button>PLAY</button>
        </div>
      </Header>
      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="tempo de duracao" />
            </th>
          </tr>
        </thead>
        <tbody>
          {!songs ? (
            <tr>
              <td colSpan={5}>Nenhuma música cadastrada</td>
            </tr>
          ) : (
            songs.map((song) => (
              <SongItem
                key={song.id}
                onDoubleClick={() => loadSong(song, songs)}
                onClick={() => setSelectedSong(song.id)}
                selected={selectedSong === song.id}
                playing={currentSong && currentSong.id === song.id}
              >
                <td>
                  <img src={PlusIcon} alt="adicionar" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>3:26</td>
              </SongItem>
            ))
          )}
        </tbody>
      </SongList>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
