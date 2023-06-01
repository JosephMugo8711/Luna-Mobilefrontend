import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import lunalogo from "../images/lunalogo.jpg";

export const SignUp = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={lunalogo} style={styles.logo} />
        </View>
        <Text style={styles.title}>CREATE ACCOUNT</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Get Exclusive features</Text>
          <Text style={styles.subtitle}>by creating an account</Text>
        </View>
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Enter your name" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>ID Number</Text>
            <TextInput style={styles.input} placeholder="Enter your ID number" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter your phone number" />
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Render checkbox icon when checked */}
            {/* Add your checkbox logic here */}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>I've read and accepted the terms and conditions</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Render checkbox icon when checked */}
            {/* Add your checkbox logic here */}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Subscribe to our newsletter</Text>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Already have an account? Sign in</Text>
          <Text style={styles.bottomText}>@ Luna 2022</Text>
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
    marginTop: 30,
  },
  logoContainer: {
    position: "relative",
    top: 0,
    left: 0,
    marginBottom: 30,
    marginRight: 30,
    padding: 0,
  },
  logo: {
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 55,
  },
  subtitleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxLabel: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    textAlign: "center",
  },
});
