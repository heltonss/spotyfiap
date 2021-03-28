import React from 'react';
import LoadingIcon from '../../assets/images/loading.svg';
import { Spinner } from './style';

const loading = () => <Spinner src={LoadingIcon} alt="carregando" />;

export default loading;
