import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Constants } from '../config';
import TabComponent from './TabComponent';
import { Phone, Email, Website } from '../assets/svg';

const UserCard = ({ user, navigation }) => {
  const tabs = [
    {
      id: 1,
      key: 'address',
      title: 'Address',
      content: (
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Street:</Text> {user.address.street}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Suite:</Text> {user.address.suite}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>City:</Text> {user.address.city}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Zipcode:</Text> {user.address.zipcode}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Geo:</Text> {user.address.geo.lat} || {user.address.geo.lng}</Text>
        </View>
      ),
    },
    {
      id: 2,
      key: 'company',
      title: 'Company',
      content: (
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Name:</Text> {user.company.name}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>Catchphrase:</Text> {user.company.catchPhrase}</Text>
          <Text style={styles.addressCompany}><Text style={styles.bold}>BS:</Text> {user.company.bs}</Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require('../assets/images/dp.png')}
          style={styles.profilePic}
        />

        <View style={styles.userDetails}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={{fontSize:14,color:'grey',fontWeight:400}}><Text style={styles.bold}>User Name:</Text> {user.username}</Text>
        </View>
      </View>
      <View style={styles.contactInfoContainer}>
        <View style={styles.contactRow}>
          <Email width={20} height={20} />
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={styles.contactRow}>
          <Phone width={20} height={20} />
          <Text style={styles.phone}>{user.phone}</Text>
        </View>
        <View style={styles.contactRow}>
          <Website width={20} height={20} />
          <Text style={styles.website}>{user.website}</Text>
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <TabComponent tabs={tabs} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.showPostButton}
          onPress={() => navigation.navigate('UserPosts', { user: user })}>
          <Text style={styles.buttonText}>Show Post</Text>
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
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: 'column',
    flex: 1, 
  },
  contactInfoContainer: {
    marginTop: 5,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    color: Constants.black,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  addressCompany:{
    fontSize:14,
    color:'grey',
    fontWeight:"400"
  },
  email: {
    color: Constants.black,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 10,
  },
  phone: {
    color: Constants.black,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 10,
  },
  website: {
    color: Constants.blue,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 15,
  },
  showPostButton: {
    backgroundColor: Constants.buttonColor,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: Constants.white,
    fontWeight: '600',
    fontSize: 13,
  },
  bold: {
    fontWeight: '500',
    color: Constants.black,
    fontSize: 14,
    lineHeight:21
  },
});

export default UserCard;
