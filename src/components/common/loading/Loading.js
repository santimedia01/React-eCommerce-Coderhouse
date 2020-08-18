import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import LoadingGif from './Loading.gif';


export default function Main(props) {
    const loadingGif = {
        display: 'flex',
        margin: 'auto',
        height: 50,
    };

    return (
        <img src={LoadingGif} style={loadingGif} alt="Cargando página..." />
    );
}