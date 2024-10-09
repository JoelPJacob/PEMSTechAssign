import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Constants } from '../config';
import TabComponent from './TabComponent';
import { Phone, Email, Website } from '../assets/svg';

const UserCard = ({ user, navigation,clearSearch }) => {
  const renderSection = (fields, data) => (
    <View>
      {fields.map((label, index) => (
        <Text key={index} style={styles.addressCompany}>
          <Text style={styles.bold}>{label}:</Text> {data[label.toLowerCase()]}
        </Text>
      ))}
    </View>
  );

  const tabs = [
    { id: 1, key: 'address', title: 'Address', content: renderSection(['Street', 'Suite', 'City', 'Zipcode'], user.address) },
    { id: 2, key: 'company', title: 'Company', content: renderSection(['Company', 'Catchphrase', 'BS'], user.company) },
  ];

  const contactInfo = [
    { Icon: Email, text: user.email, style: styles.email },
    { Icon: Phone, text: user.phone, style: styles.phone },
    { Icon: Website, text: user.website, style: styles.website }
  ];

  return (
    <View style={styles.card}>
      <View style={styles.userInfoContainer}>
        <Image source={require('../assets/images/dp.png')} style={styles.profilePic} />
        <View style={styles.userDetails}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.userName}>
            <Text style={styles.bold}>User Name:</Text> {user.username}
          </Text>
        </View>
      </View>

      <View style={styles.contactInfoContainer}>
        {contactInfo.map(({ Icon, text, style }, index) => (
          <View key={index} style={styles.contactRow}>
            <Icon width={20} height={20} />
            <Text style={style}>{text}</Text>
          </View>
        ))}
      </View>

      <TabComponent tabs={tabs} />

      <TouchableOpacity
        style={styles.showPostButton}
        onPress={() => {
          clearSearch();
          navigation.navigate('UserPosts', { user });
        }}>
        <Text style={styles.buttonText}>Show Post</Text>
      </TouchableOpacity>
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
    flex: 1,
  },
  userName: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '400',
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
  },
  addressCompany: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '400',
  },
  email: {
    color: Constants.black,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
  },
  phone: {
    color: Constants.black,
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 10,
  },
  website: {
    color: Constants.blue,
    fontSize: 12,
    marginLeft: 10,
  },
  showPostButton: {
    backgroundColor: Constants.buttonColor,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
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
    lineHeight: 20
  },
});

export default UserCard;
