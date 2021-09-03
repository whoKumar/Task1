import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitleStyle}>Posts List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: '#fff',
    elevation: 0,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitleStyle: {
    color: '#000',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    fontWeight: '600',
  },
});
