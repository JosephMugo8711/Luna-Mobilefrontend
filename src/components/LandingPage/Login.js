import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import lunalogo from "../images/lunalogo.jpg";

export const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={lunalogo} style={styles.logo} />
        </View>
        <Text style={styles.title}>WELCOME BACK</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Please Enter your details</Text>
        </View>
        <View style={styles.space} />
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" />
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Render checkbox icon when checked */}
            {/* Add your checkbox logic here */}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember me</Text>
          <Text style={styles.checkboxLabel}>Forgot Password</Text>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Don't have an account? Sign up</Text>
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
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 20,
  },
  logo: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 110,
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
    marginTop: "auto",
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    textAlign: "center",
  },
});





// import React from "react";
// import { View, Image } from "react-native/types";
// import lunalogo from "../images/lunalogo.jpg"


// // Build a signup page 
// // Prompts user for Fullname, Idnumber, email and phone number
// // Checks to agree on terms and conditions
// // checks to subscribe to newsletters

// export const Login = () => {
//     return (
//         <View>
//             <Image source={lunalogo } />

//         </View>
//     )
// }