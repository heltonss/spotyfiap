import React, { useEffect, useState } from "react";
import Modal from "components/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SongItem, SongList, Icon } from "./style";
import ClockIcon from "assets/images/clock.svg";
import PlusIcon from "assets/images/plus.svg";

import { Creators as SongsActions } from "../../store/ducks/songs";
import { Creators as PlayerActions } from "../../store/ducks/player";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";

const HandlePlaylist = ({ getSongsRequest, songs, loadSong, currentSong }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  console.log(songs);

  useEffect(() => {
    getSongsRequest();
  }, []);

  return (
    <Modal title="Crie sua playlist" maxWidth="600">
      <InputCustom
        type="text"
        label="Título"
        placeholder="adicione o titulo da sua playlist"
      />
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
          {songs.map((song) => (
            <SongItem
              key={song.id}
              onDoubleClick={() => loadSong(song, songs)}
              onClick={() => setSelectedSong(song.id)}
              selected={selectedSong === song.id}
              playing={currentSong && currentSong.id === song.id}
            >
              <td>
                <Icon src={PlusIcon} alt="adicionar" />
              </td>
              <td>{song.title}</td>
              <td>{song.author}</td>
              <td>{song.album}</td>
              <td>3:26</td>
            </SongItem>
          ))}
        </tbody>
      </SongList>
      <ButtonCustom colorFont="#333" label="Criar playlist" />
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songs.data,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...SongsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HandlePlaylist);
