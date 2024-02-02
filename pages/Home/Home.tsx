import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {globalStyles} from '../../assets/styles/global.styles';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundLight]}>
      <Text>red</Text>
    </SafeAreaView>
  );
};

export default Home;
