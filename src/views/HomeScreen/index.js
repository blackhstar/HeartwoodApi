import React from "react";
import { Button , SafeAreaView, Text , View , StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) =>{

    const handleLideresEvent = () =>{
        navigation.navigate("Lideres");
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.imageContent}>
            <Image source={ require( "../../../src/img/icon.png")   } style={styles.image} />
            </View>
            <View style={styles.content}>
                <Button title="Lideres" style={styles.button} color="#212121" onPress={handleLideresEvent} />
            </View>
            <View style={styles.content}>
                <Button title="Armaduras (proximamente)" style={styles.button} color="#212121" disabled />
            </View>
            <View style={styles.content}>
                <Button title="Armas (proximamente)" style={styles.button} color="#212121" disabled />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'black',
    },
    content:{
        marginLeft: 18,
        marginRight: 18, 
        marginBottom: 10,
    },
    imageContent:{
        marginLeft: 18,
        marginRight: 18, 
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: 80,
        height: 80,
    },
});


export default HomeScreen;