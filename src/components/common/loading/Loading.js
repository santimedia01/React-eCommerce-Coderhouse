import React from 'react';

import LoadingGif from './Loading.gif';


export default function Main({gifHeight = 50}) {
    const loadingGif = {
        display: 'flex',
        margin: 'auto',
        height: gifHeight,
    };

    return (
        <img src={LoadingGif} style={loadingGif} alt="Cargando página..." />
    );
}