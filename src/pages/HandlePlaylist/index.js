import React, { useEffect, useState } from "react";
import Modal from "components/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SongItem, SongList, Icon } from "./style";
import ClockIcon from "assets/images/clock.svg";
import PlusIcon from "assets/images/plus.svg";

import { Creators as SongsActions } from "../../store/ducks/songs";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";

import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import LoaderWave from "components/Loader";

const HandlePlaylist = ({
  getSongsRequest,
  songs,
  loading,
  currentSong,
  savePlaylist,
}) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState("");
  const listSongs = new Set();

  const createPlaylist = () => {

    const playlist = {
      title,
      description,
      thumbnail,
      songs: Array.from(listSongs),
    };
    console.log({ playlist });
    savePlaylist(playlist);


  };

  useEffect(() => {
    getSongsRequest();
  }, []);


  return (
    <Modal title="Crie sua playlist" maxWidth="600">
      <InputCustom
        type="text"
        label="Nome da playlist"
        placeholder="adicione o titulo da sua playlist"
        func={setTitle}
      />
      <InputCustom
        type="text"
        label="Descrição"
        placeholder="adicione o titulo da sua playlist"
        func={setDescription}
      />
      <InputCustom
        type="text"
        label="Capa da playlist"
        placeholder="adicione uma url de capa que encontrar no google"
        func={setThumbnail}
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
              onClick={() => setSelectedSong(song.id)}
              selected={selectedSong === song.id}
              playing={currentSong && currentSong.id === song.id}
            >
              <td>
                <Icon
                  onClick={() => listSongs.add(song)}
                  src={PlusIcon}
                  alt="adicionar"
                />
              </td>
              <td>{song.title}</td>
              <td>{song.author}</td>
              <td>{song.album}</td>
              <td>3:26</td>
            </SongItem>
          ))}
        </tbody>
      </SongList>
      {loading ? (
        <LoaderWave />
      ) : (
        <ButtonCustom
        type="button"
          colorFont="#333"
          label="Criar playlist"
          func={createPlaylist}
        />
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songs.data,
  currentSong: state.player.currentSong,
  loading: state.playlists.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { ...SongsActions, ...PlayerActions, ...PlaylistActions },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HandlePlaylist);
