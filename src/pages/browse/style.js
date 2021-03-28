import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from 'components/loading/style';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }

  img {
    height: 250px;
  }

  &:hover img{
    opacity 0.4;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
