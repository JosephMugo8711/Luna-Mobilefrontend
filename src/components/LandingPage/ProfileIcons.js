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
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  groupIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    flex: 1, // Added flex property to occupy remaining space
    justifyContent: "space-between", // Added to evenly distribute icons
    paddingHorizontal: 10, // Added to provide space between icons
    marginLeft: 15, // Added to provide space between
    marginRight: 15,
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
    alignSelf: "center",
  },
});
