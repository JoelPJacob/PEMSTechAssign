import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from '../config';

const PostCard = ({ post }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: Constants.white,
    borderRadius: 10,
    shadowColor: Constants.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PostCard;
