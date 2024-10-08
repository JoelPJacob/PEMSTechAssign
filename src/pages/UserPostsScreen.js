import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getUserPosts } from '../config/api';
import { PostCard, Loader } from '../components';

const UserPostsScreen = ({ route }) => {
  const { user } = route.params;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const postData = await getUserPosts(user.id);
      setPosts(prevPosts => [...prevPosts, ...postData.slice((page - 1) * 5, page * 5)]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading && page === 1) return <Loader size="large" color="#FFBB1A" />; {/* Show the Loader with custom size and color */ }

  return (
    <View style={{alignItems:'center',marginVertical:10,paddingBottom:100}}>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.website}</Text>
      {error && <Text>{error}</Text>}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <Loader size="small" color="#FF5733" />}
      />
    </View>
  );
};

export default UserPostsScreen;
