import React from 'react';
import { NativeRouter, Route } from 'react-router-native'

import { Container } from '~/styles';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Home from '~/screens/Home';

const Routes = () => {
    return (
        <Container>
            <NativeRouter>
                <Route exact path='/' component={ Home } />
            </NativeRouter>
        </Container>
    );
};

export default Routes;