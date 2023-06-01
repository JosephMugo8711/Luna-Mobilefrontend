import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export const Profile = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>COMPLETE PROFILE</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Complete additional profile information</Text>
        </View>
        <View style={styles.space} />
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter your username" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Repeat Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" />
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Complete Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 68,
  },
  subtitleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  space: {
    marginTop: 40,
  },
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    flex: 2,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
    alignSelf: "flex-end",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
