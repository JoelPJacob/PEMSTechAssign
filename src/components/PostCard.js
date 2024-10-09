import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from '../config';

const PostCard = ({ post }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: Constants.white,
    borderRadius: 10,
    borderTopLeftRadius:0,
    borderBottomStartRadius:0,
    shadowColor: Constants.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4, 
    borderLeftColor: Constants.blue, 
  },
  title: {
    fontWeight: "500",
    marginBottom: 5,
    color: Constants.black,
    fontSize: 15,
    lineHeight:20,
    marginTop:10
  },
  body: {
    fontWeight: "400",
    marginBottom: 15,
    color: 'grey',
    fontSize: 14,
    lineHeight:20
  },
});

export default PostCard;
