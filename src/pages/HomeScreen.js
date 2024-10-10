import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { getUsers } from '../config/api';
import { UserCard, Loader } from '../components';
import { Constants } from '../config';
import { Search } from '../assets/svg';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, users]);

  const loopUsers = async () => {
    try {
      setLoading(true);
      const userData = await getUsers();
      setUsers(prevUsers => [...prevUsers, ...userData]);
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const userData = await getUsers();
      setUsers(prevUsers => [...prevUsers, ...userData.slice((page - 1) * 5, page * 5)]);
      setError('');
      if (page * 5 >= userData.length) {
        setAllLoaded(true);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreUsers = () => {
    if (!allLoaded) {
      setPage(prevPage => prevPage + 1);
    }
    else loopUsers()
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
      <View style={styles.searchContainer}>
        <Search width={20} height={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Name or Email..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

      {filteredUsers.length === 0 && searchQuery ? (
        <Text style={styles.noResultsText}>No ResultsFound</Text>
      ) : (
        <FlatList
          data={filteredUsers.length > 0 ? filteredUsers : users}
          renderItem={({ item }) => (
            <UserCard user={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreUsers}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && !allLoaded && <Loader size="large" color={Constants.blue} />}
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
    marginHorizontal: 20,
    backgroundColor: Constants.white,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 50,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
  loadAllButton: {
    backgroundColor: '#FFBB1A',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  loadAllText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
