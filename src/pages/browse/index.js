import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Title, List, Playlist } from "./style";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import Loading from "components/loading";

const Browse = ({ playlists, loading, playlistsId }) => {
  return (
    <Container>
      <Title>Navegar {loading && <Loading />} </Title>
      <List>
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} to={`/playlist/${playlistsId}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
};

Browse.propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  playlists: state.playlists.data.playlist,
  loading: state.playlists.loading,
  playlistsId: state.playlists.data.id,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
