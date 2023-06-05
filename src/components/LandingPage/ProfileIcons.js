import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export const ProfileIcons = () => {
  return (
    <View style={styles.profileLinks}>
      <View style={styles.profileIconContainer}>
        <Feather name="info" size={24} color="black" />
      </View>
      <View style={styles.groupIcon}>
        <View style={styles.profileIcon}>
          <Feather name="user" size={24} color="white" />
          <Text style={styles.profileIconText}>Profile</Text>
        </View>
        <View style={styles.profileIconContainer}>
          <Feather name="calendar" size={24} color="black" />
        </View>
        <View style={styles.profileIconContainer}>
          <Feather name="bar-chart-2" size={24} color="black" />
        </View>
        <View style={styles.profileIconContainer}>
          <Feather name="settings" size={24} color="black" />
        </View>
      </View>
      <View style={styles.homeIconContainer}>
        <Feather name="home" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  groupIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 9,
    marginRight: 10,
    padding: 5,
  },
  
  profileIconContainer: {
    alignItems: "center",
  },
  profileIconText: {
    fontSize: 12,
    color: "white",
    marginTop: 5,
  },
  homeIconContainer: {
    marginTop: 10,
    alignSelf: "center",
  },
});
