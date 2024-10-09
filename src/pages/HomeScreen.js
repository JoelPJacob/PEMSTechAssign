import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl, TextInput, StyleSheet } from 'react-native';
import { getUsers } from '../config/api';
import { UserCard, Loader } from '../components';
import { Constants } from '../config';
import { Search } from '../assets/svg';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredUsers(users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredUsers([]);
    }
  }, [searchQuery, users]);

  const clearSearchQuery = () => {
    setSearchQuery('');
  };

  const fetchUsers = async () => {
    if (!hasMoreUsers) return;

    setLoading(true);
    try {
      const userData = await getUsers();
      const newUsers = userData.slice((page - 1) * 5, page * 5);

      setUsers(prevUsers => [...prevUsers, ...newUsers]);
      setHasMoreUsers(newUsers.length === 5); // If fewer than 5 users, no more data
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const loadMoreUsers = () => {
    if (hasMoreUsers) setPage(prevPage => prevPage + 1);
  };

  if (loading && page === 1) return <Loader size="large" color={Constants.blue} />;

  return (
    <View style={{ paddingBottom: 100 }}>
      <View style={styles.searchContainer}>
        <Search width={20} height={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Name or Email..."
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {filteredUsers.length === 0 && searchQuery ? (
        <Text style={styles.noResultsText}>No Results Found</Text>
      ) : (
        <FlatList
          data={filteredUsers.length > 0 ? filteredUsers : users}
          renderItem={({ item }) => <UserCard
            user={item}
            navigation={navigation}
            clearSearch={clearSearchQuery}
          />
          }
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreUsers}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <Loader size="large" color={Constants.blue} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: Constants.white,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 50,
    color: Constants.black
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
});

export default HomeScreen;
