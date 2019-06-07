import React from 'react';
import { Container, Date, Title } from './styles';

const MainHighlight = () => {
    return(
        <Container>
            <Date>05/06/2019</Date>
            <Title>Godzilla: King of the Monsters</Title>
            <Backdrop source={require('https://image.tmdb.org/t/p/w780/uovH5k4BAEPqXqxgwVrTtqH169g.jpg')} />
        </Container>
    );
};

export default MainHighlight;