import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "components/loading";
import { Container } from "./style";
import { withRouter } from "react-router-dom";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import Details from "./Details";

const Playlist = ({
  match,
  playlistDetails,
  loadPlaylistDetails,
  getPlaylistDetailsRequest,
  loading,
}) => {
  loadPlaylistDetails = () => {
    const { id } = match.params;
    getPlaylistDetailsRequest(id);
  };

  useEffect(() => {
    loadPlaylistDetails();
  }, [match.params.id]);

  return loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    <Details playlistDetails={playlistDetails} />
  );
};

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails.data,
  loading: state.playlistDetails.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlaylistDetailsActions }, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playlist)
);
