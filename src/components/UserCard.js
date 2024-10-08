import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from '../config';
import TabComponent from './TabComponent';

const UserCard = ({ user, navigation }) => {
  const tabs = [
    {
      id: 1,
      key: 'address',
      title: 'Address',
      content: (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>Street: {user.address.street}</Text>
          <Text>Suite: {user.address.suite}</Text>
          <Text>City: {user.address.city}</Text>
          <Text>Zipcode: {user.address.zipcode}</Text>
          <Text>Geo: {user.address.geo.lat} || {user.address.geo.lng}</Text>
        </View>
      ),
    },
    {
      id: 2,
      key: 'company',
      title: 'Company',
      content: (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>Company: {user.company.name}</Text>
          <Text>Catchphrase: {user.company.catchPhrase}</Text>
          <Text>BS: {user.company.bs}</Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.card}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
        <Text style={styles.website}>{user.website}</Text>
      </View>

      <TabComponent tabs={tabs} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ backgroundColor: "blue", alignSelf: 'center', width: '90%', alignItems: 'center', borderRadius: 10, padding: 10 }}
          onPress={() => navigation.navigate('UserPosts', { user: user })} >
          <Text style={{ color: Constants.white,fontWeight:'600',fontSize:13 }}> Show Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: Constants.white,
    borderRadius: 10,
    shadowColor: Constants.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    color: Constants.black,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 10,
  },
  email: {
    color: Constants.black,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 10,
  },
  phone: {
    color: Constants.black,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 10,
  },
  website: {
    color: Constants.blue,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 15,
  },
});

export default UserCard;
