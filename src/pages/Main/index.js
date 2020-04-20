import React from 'react';
import {StatusBar} from 'react-native';
import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    </Container>
  );
}
