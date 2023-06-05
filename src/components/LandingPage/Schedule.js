import React from "react";
import lunalogo from "../images/lunalogo.jpg";

export const Schedule = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image source={lunalogo} style={styles.logo} />
            </View>

        </View>
    )
}

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

})
