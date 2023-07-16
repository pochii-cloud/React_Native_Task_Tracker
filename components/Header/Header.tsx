import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>TASKIFY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
