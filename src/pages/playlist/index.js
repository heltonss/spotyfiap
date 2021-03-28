import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "components/loading";
import { Container } from "./style";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import Details from "./Details";

const Playlist = ({
  match,
  playlistDetails,
  loadPlaylistDetails,
  getPlaylistDetailsRequest,
}) => {
  loadPlaylistDetails = () => {
    const { id } = match.params;
    getPlaylistDetailsRequest(id);
  };

  useEffect(() => {
    loadPlaylistDetails();
  }, []);

  return playlistDetails.loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    <Details playlistDetails={playlistDetails} />
  );
};

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlaylistDetailsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
