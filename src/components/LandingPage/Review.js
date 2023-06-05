import React from 'react';
import review from "../images/review.jpg";
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export const Review = () => {
    return (
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
            <Text style={styles.reviewText}>
               <Text>Write a</Text>{'\n'}
                <Text  style={styles.writeText}>Review</Text> 
            </Text>
          <View style={styles.arrowContainer}>
             <AntDesign name="arrowright" size={24} color="black" />
          </View>
          <Image source={review} style={styles.reviewImage} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    reviewContainer: {
      position: 'relative',
      width: 277.12,
      height: 100,
      backgroundColor: '#8CE68A',
      borderRadius: 10.7619,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 10,
    },
    reviewText: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 22.1569,
      lineHeight: 27,
      color: '#000000',
      marginRight: 10,
      marginBottom: 18,
    },
    writeText: {
      fontWeight: 'bold',
    },
    arrowContainer: {
      position: 'absolute',
      right: 10,
      bottom: 10,
    },
    reviewImage: {
      position: 'absolute',
      width: 144.11,
      height: 60.7,
      left: 10,
      top: 30,
    },
  });
  