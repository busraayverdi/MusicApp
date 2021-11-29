import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
