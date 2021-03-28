import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Title, List, Playlist } from "./style";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import Loading from "components/loading";

const Browse = ({ playlists }) => {
  return (
    <Container>
      <Title>Navegar {playlists.loading && <Loading />} </Title>
      <List>
        {playlists.data.map((playlist) => (
          <Playlist key={playlist.id} to={`/playlist/${playlist.id}`}>
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
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    loading: PropTypes.bool,
  }),
};

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
