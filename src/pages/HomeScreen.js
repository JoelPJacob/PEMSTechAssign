import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, TextInput, StyleSheet } from 'react-native';
import { getUsers } from '../config/api';
import { UserCard, Loader } from '../components';
import { Constants } from '../config';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, users]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const userData = await getUsers();
      setUsers(prevUsers => [...prevUsers, ...userData.slice((page - 1) * 5, page * 5)]);
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const loadMoreUsers = () => {
    setPage(prevPage => prevPage + 1);
  };

  const refreshUsers = () => {
    setRefreshing(true);
    setUsers([]);
    setPage(1);
  };

  const handleSearch = () => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  if (loading && page === 1) return <Loader size="large" color="#FFBB1A" />

  return (
    <View style={{ paddingBottom: 100 }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name or Email..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

      {filteredUsers.length === 0 && searchQuery ? (
        <Text style={styles.noResultsText}>No Results Found</Text>
      ) : (
        <FlatList
          data={filteredUsers.length > 0 ? filteredUsers : users}
          renderItem={({ item }) => (
            // <TouchableOpacity onPress={() => navigation.navigate('UserPosts', { user: item })}>
            <UserCard user={item} navigation={navigation} />
            // </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreUsers}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <Loader size="small" color="#FF5733" />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshUsers}
              colors={['#FFBB1A']}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: Constants.white,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
});

export default HomeScreen;
