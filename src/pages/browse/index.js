import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Title, List, Playlist } from "./style";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import Loading from "components/loading";

const Browse = ({ playlists, loading }) => {
  return (
    <Container>
      <Title>Navegar {loading && <Loading />} </Title>
      <List>
        {playlists.map((p) => (
          <Playlist key={p.playlist.description} to={`/playlist/${p.id}`}>
            <img src={p.playlist.thumbnail} alt={p.title} />
            <strong>{p.playlist.title}</strong>
            <p>{p.playlist.description}</p>
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
  playlists: state.playlists.data,
  loading: state.playlists.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
