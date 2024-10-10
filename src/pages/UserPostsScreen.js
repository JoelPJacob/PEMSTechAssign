import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { getUserPosts } from '../config/api';
import { PostCard, Loader } from '../components';
import { Constants } from '../config';
import { Phone, Email, Website } from '../assets/svg';

const UserPostsScreen = ({ route }) => {
  const { user } = route.params;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const postData = await getUserPosts(user.id);
      const newPosts = postData.slice((page - 1) * 5, page * 5);

      if (newPosts.length < 5) {
        setAllLoaded(true);
      }

      setPosts(prevPosts => [...prevPosts, ...newPosts]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loopPosts = async () => {
    try {
      setLoading(true);
      const postData = await getUserPosts(user.id);
      const newPosts = postData.slice((page - 3) * 5, page * 5);
      if (newPosts.length < 5) {
        setAllLoaded(true);
      }
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = () => {
    if (!allLoaded) {
      setPage(prevPage => prevPage + 1);
    }
    else loopPosts()

    
  };

  if (loading && page === 1) return <Loader size="large" color={Constants.blue} />

  return (
    <View style={{ marginVertical: 10, paddingBottom: 0 }}>
      <View style={{ marginStart: 20 }}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/images/dp.png')} style={styles.profilePic} />
          <Text style={styles.userName}>{user.name} {"["}{user.username}{"]"}</Text>
        </View>

        <View style={styles.contactInfo}>
          <Email style={styles.icon} width={20} height={20} />
          <Text style={styles.contactText}>{user.email}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Phone style={styles.icon} width={20} height={20} />
          <Text style={styles.contactText}>{user.phone}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Website style={styles.icon} width={20} height={20} />
          <Text style={styles.websiteText}>{user.website}</Text>
        </View>
      </View>
      {error && <Text>{error}</Text>}
      <View style={{ alignItems: 'center', paddingBottom: 250, marginTop: 10 }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && !allLoaded && <Loader size="large" color={Constants.blue} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: Constants.black,
    lineHeight: 20,
    fontWeight: '500',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactText: {
    fontSize: 13,
    color: Constants.black,
    lineHeight: 20,
    fontWeight: '400',
  },
  websiteText: {
    fontSize: 13,
    color: Constants.buttonColor,
    lineHeight: 20,
    fontWeight: '400',
  },
});

export default UserPostsScreen;
