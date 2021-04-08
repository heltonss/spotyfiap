import React, { useEffect, useState } from "react";
import Modal from "components/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SongItem, SongList, Icon, Actions } from "./style";
import ClockIcon from "assets/images/clock.svg";
import PlusIcon from "assets/images/plus.svg";
import { useAlert } from "react-alert";
import { withRouter } from "react-router-dom";

import { Creators as SongsActions } from "../../store/ducks/songs";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";

import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import LoaderWave from "components/Loader";
import { AlertType } from "utils/AlertType";
import { useHistory } from "react-router";

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
  updatePlaylist,
  deletePlaylist,
  deleteSuccess,
}) => {
  const alert = useAlert();
  const [selectedSong, setSelectedSong] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [songsSelected, setSongsSelected] = useState([]);
  const [isValidate, setIsValidate] = useState();
  const playlistID = match.params.id;
  const isEdit = playlistID || null;
  const history = useHistory();

  const route = () => history.push(`/home`);

  const createPlaylist = () => {
    const playlist = {
      title,
      description,
      thumbnail,
      songs: songsSelected,
    };
    savePlaylist(playlist);
    return route();
  };

  const updatePlaylistCurrent = () => {
    const playlist = {
      body: {
        title,
        description,
        thumbnail,
        songs: songsSelected,
      },
      id: match.params.id,
    };
    console.log({ playlist });
    updatePlaylist(playlist);
    return route();
  };

  const removePlaylist = () => {
    deletePlaylist(playlistID);
  };

  useEffect(() => {
    getSongsRequest();
    getPlaylistDetailsRequest(playlistID);
  }, []);

  useEffect(() => {
    if (isEdit && loadingDetails) {
      const { title, description, thumbnail, songs } = playlistDetails;
      setTitle(title || "");
      setDescription(description || "");
      setThumbnail(thumbnail || "");
      setSongsSelected(songs);
    }
  }, [loadingDetails]);

  useEffect(() => {
    const isTitleNotEmpty = title && title.trim().length > 0;
    const isDescriptionNotEmpty = description && description.trim().length > 0;
    const isThumbnailNotEmpty = thumbnail && thumbnail.trim().length > 0;
    setIsValidate(
      isTitleNotEmpty && isDescriptionNotEmpty && isThumbnailNotEmpty
    );
  }, [title, description, thumbnail]);

  useEffect(() => {
    if (deleteSuccess) {
      alert.show("playlist removida", { type: AlertType.SUCCESS });
      route();
    }
  }, [deleteSuccess]);

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
        placeholder="adicione uma descrição para sua playlist"
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
                    setSongsSelected([...songsSelected, song]);
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
        <Actions>
          {isEdit ? (
            <ButtonCustom
              background="#ff5500"
              type="button"
              colorFont="#fff"
              label="Deletar playlist"
              func={removePlaylist}
            />
          ) : (
            <span />
          )}
          <ButtonCustom
            type="button"
            colorFont="#333"
            label={isEdit ? "Salvar playlist" : "Criar playlist"}
            func={isEdit ? updatePlaylistCurrent : createPlaylist}
            disabled={!isValidate}
          />
        </Actions>
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
  deleteSuccess: state.playlists.success,
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HandlePlaylist)
);
