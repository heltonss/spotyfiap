import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AddPlaylistIcon from "assets/images/add_playlist.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";
import { Container, NewPlaylist, Nav, Edit, Item, LinkText } from "./style";
import Loading from "components/loading";

const Sidebar = ({ getPlaylistRequest, playlists, loading }) => {
  useEffect(() => {
    getPlaylistRequest();
  }, []);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/home">Navegar</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <a href="#">Rádio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>sua biblioteca</span>
          </li>
          <li>
            <a href="#">Seu Daily Mix</a>
          </li>
          <li>
            <a href="#">Tocados recentemente</a>
          </li>
          <li>
            <a href="#">Músicas</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Artistas</a>
          </li>
          <li>
            <a href="#">Estações</a>
          </li>
          <li>
            <a href="#">Arquivos locais</a>
          </li>
          <li>
            <a href="#">Vídeos</a>
          </li>
          <li>
            <a href="#">Podcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>playlists</span>
            {loading && <Loading />}
          </li>
          {playlists.map((p) => (
            <Item key={p.playlist.description}>
              <Link to={`/playlist/${p.id}`}>{p.playlist.title}</Link>
              <LinkText to={`/create-playlist/${p.id}`}>
                <Edit />
              </LinkText>
            </Item>
          ))}
        </Nav>
      </div>
      <NewPlaylist to="/create-playlist">
        <img src={AddPlaylistIcon} alt="Adicionar playlist" />
        Nova Playlist
      </NewPlaylist>
    </Container>
  );
};

Sidebar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
