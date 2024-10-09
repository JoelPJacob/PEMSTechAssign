import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from '../config';

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <View>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.key ? styles.activeTab : styles.inactiveTab
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab.key ? styles.activeTabText : styles.inactiveTabText
            ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabContent}>
        {tabs.find((tab) => tab.key === activeTab).content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: Constants.blue,
  },
  inactiveTab: {
    backgroundColor: '#E0E0E0',
  },
  tabText: {
    fontWeight: '600',
  },
  activeTabText: {
    color: Constants.white,
  },
  inactiveTabText: {
    color: Constants.black,
  },
  tabContent: {
    marginTop: 10,
  },
});

export default TabComponent;
