import React, { useEffect, useState } from "react";
import Modal from "components/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SongItem, SongList, Icon } from "./style";
import ClockIcon from "assets/images/clock.svg";
import PlusIcon from "assets/images/plus.svg";
import { useAlert } from "react-alert";

import { Creators as SongsActions } from "../../store/ducks/songs";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";

import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import LoaderWave from "components/Loader";
import { AlertType } from "utils/AlertType";

const HandlePlaylist = ({
  getSongsRequest,
  songs,
  loading,
  currentSong,
  savePlaylist,
  match,
  playlistDetails,
  loadingDetails,
  getPlaylistDetailsRequest,
}) => {
  const alert = useAlert();
  const [selectedSong, setSelectedSong] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isValidate, setIsValidate] = useState();
  const listSongs = new Set();
  const playlistID = match.params.id;
  const isEdit = playlistID || null;

  const createPlaylist = () => {
    const playlist = {
      title,
      description,
      thumbnail,
      songs: Array.from(listSongs),
    };
    return savePlaylist(playlist);
  };

  useEffect(() => {
    getSongsRequest();
    getPlaylistDetailsRequest(playlistID);
  }, []);

  useEffect(() => {
    if (isEdit && loadingDetails) {
      const { title, description, thumbnail } = playlistDetails;
      setTitle(title || "");
      setDescription(description || "");
      setThumbnail(thumbnail || "");
    }
  }, [loadingDetails]);

  useEffect(() => {
    setIsValidate(
      title.length > 5 && description.length > 10 && thumbnail.length > 15
    );
  }, [title, description, thumbnail]);

  return (
    <Modal
      title={isEdit ? "Editar playlist" : "Crie uma playlist"}
      maxWidth="600"
    >
      <InputCustom
        type="text"
        label="Nome da playlist"
        placeholder="adicione o titulo da sua playlist"
        func={setTitle}
        value={title}
      />
      <InputCustom
        type="text"
        label="Descrição"
        placeholder="adicione o titulo da sua playlist"
        func={setDescription}
        value={description}
      />
      <InputCustom
        type="text"
        label="Capa da playlist"
        placeholder="adicione uma url de capa que encontrar no google"
        func={setThumbnail}
        value={thumbnail}
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
                  onClick={() => {
                    alert.show("Música add", { type: AlertType.SUCCESS });
                    listSongs.add(song);
                  }}
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
          disabled={!isValidate}
        />
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songs.data,
  currentSong: state.player.currentSong,
  loading: state.playlists.loading,
  playlistDetails: state.playlistDetails.data,
  loadingDetails: !state.playlistDetails.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...SongsActions,
      ...PlayerActions,
      ...PlaylistActions,
      ...PlaylistDetailsActions,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HandlePlaylist);
