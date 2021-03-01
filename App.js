import React from 'react';
import {Dimensions, 
  StyleSheet, 
  SafeAreaView
} from 'react-native';

import SearchBar from './components/SearchBar.js'
import Details from './components/Details.js'
const dev_height = Dimensions.get("window").height
const dev_width = Dimensions.get("window").width

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar/>
      <Details/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height:dev_height,
    width:dev_width,
    backgroundColor:"#0D0D0D"
  },
})