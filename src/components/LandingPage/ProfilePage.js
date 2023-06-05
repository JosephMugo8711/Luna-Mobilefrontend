import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import lunalogo from "../images/lunalogo.jpg";
import jowamu from "../images/jowamu.jpg";
import { Feather } from '@expo/vector-icons';
import { Review } from './Review';
import { ProfileIcons } from './ProfileIcons';

export const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logologout}>
        <View style={styles.logoContainer}>
          <Image source={lunalogo} style={styles.logo} />
        </View>
        <View>
          <TouchableOpacity style={styles.logout}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.activeRecord}>
        <Text style={styles.activeText}>Activity Records</Text>
        <Text style={styles.activeParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </Text>
      </View>
      <View style={styles.avatar}>
        <View style={styles.picture}>
          <Image source={jowamu}  style={styles.profilePicture}/>
        </View>
        <View style={styles.avatarDetails}>
          <Text style={styles.pictureText}>Picture</Text>
          <Text style={styles.pictureDescription}>
            Your profile picture is presented on sections like comments and other community-based engagements you make
          </Text>
          <View style={styles.editAvatar}>
            <Text style={styles.changePictureText}>Change Picture</Text>
            <Text style={styles.removeText}>Remove</Text>
          </View>
        </View>
      </View>
      <View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Joseph Wamiti" />
        <Feather name="edit" size={16} color="#000000" style={styles.editIcon} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="joseph@gmail.com" />
        <Feather name="edit" size={16} color="#000000" style={styles.editIcon} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} placeholder="0705049364" />
        <Feather name="edit" size={16} color="#000000" style={styles.editIcon} />
      </View>
    </View>

    <View style={styles.moreDetails}>
        <Text style={styles.moreDetailsParagraph}>
          Some user details like identification numbers aren’t shown and not editable due to security and data integrity.
          To change these details, please contact support.
        </Text>
    </View >
         <View style={styles.review}>
            <Review />

          </View>
          <View style={styles.profileIconContainer}>
             <ProfileIcons />
          </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  logologout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  logoContainer: {
    marginLeft: 20,
  },
  logoutContainer: {
    marginRight: 20,
  },
  logout: {
    width: 57,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0000",
    borderRadius: 4,
  },
  activeRecord: {
    position: "relative",
    width: 333,
    height: 60,
    left: 0,
    top: 20,
    backgroundColor: "#101010",
    borderRadius: 12,
    padding: 13,
  },
  activeText: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  activeParagraph: {
   
    fontSize: 4,
    color: "#FFFFFF",
    width: 150,
 
  },
  avatar: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
  },
  picture: {
    width: 93,
    height: 93,
    borderRadius: 46.5, // Adjust the value to make the view perfectly rounded
    overflow: "hidden", // Ensure the image stays within the rounded view
    marginRight: 20,
  },
  profilePicture: {
    width: "100%",
    height: "100%",
  },
  avatarDetails: {
    flex: 1,
  },
  pictureText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    color: "#000000",
  },
  pictureDescription: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    color: "#767676",
    marginTop: 5,
  },
  editAvatar: {
    flexDirection: "row",
    marginTop: 10,
  },
  changePictureText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    color: "#000000",
    marginRight: 20,
  },
  removeText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    color: "#000000",
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
    flex: 1,
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
    paddingRight: 90, // Add padding to accommodate the icon
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -8 }], // Adjust the vertical position of the icon
  }, 
  moreDetails: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  moreDetailsParagraph: {
    textAlign: "center",
    fontSize: 13,
  }, 
  review: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
});
