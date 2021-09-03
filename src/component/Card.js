import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({item}) => {
  return (
    <View key={item.id} style={styles.CardStyle}>
      <View>
        <View style={styles.productCaptionArea}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.postCaption}>{item.body}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  CardStyle: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  name: {
    fontSize: 16,
    color: '#666',
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: '#000',
    paddingVertical: 5,
    lineHeight: 20,
    flex: 1,
  },
  postCaption: {
    fontSize: 14,
    color: '#999',
  },
});
