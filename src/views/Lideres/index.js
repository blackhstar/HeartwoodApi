import React, { useState , useEffect } from "react";
import { Text , View , StyleSheet, Alert, ScrollView  } from "react-native";

const Lideres = () =>{

    const [data, setData] = useState([]);
    var cont = 0;

    function postData() {
        const url = "https://apps.heartwoodatlas.com/apps/getLeaderboard.php?maxRank=100";
        const response =  fetch( url , {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        }).then((response) => response.json())
        .then((responseJson) => {

        setData(Object.values(responseJson));

      })
      .catch((error) => {
        console.error(error);
      });
    }
    
      useEffect(()=>{
        postData()
      },[]);


      return (
        <ScrollView style={styles.conteiner}>
            <View style={styles.content}>
                <View style={styles.titleTable} >
                    <Text style={styles.textTitle}>
                        Lideres
                    </Text>
                </View> 
                <View style={styles.contentRow}>

                    <View  style={styles.contentTableTitle}>
                        <Text style={styles.textContent}>
                            Rank
                        </Text>
                    </View>   

                    <View  style={styles.contentTableTitle}>
                        <Text style={styles.textContent}>
                            Nivel
                        </Text>
                    </View>   

                    <View  style={styles.contentTableNameTitle}>
                        <Text style={styles.textContent}>
                            Nombre
                        </Text>
                    </View>   

                    <View  style={styles.contentTableNameTitle}>
                        <Text style={styles.textContent}>
                            Puntuaciòn
                        </Text>
                    </View>   
                </View>  
                {data.map((element)=>( cont++,
                    <View style={styles.contentRow}>

                        <View  style={styles.contentTable}>
                            <Text style={styles.textContent}>
                                {cont}
                            </Text>
                        </View>  

                        <View  style={styles.contentTable}>
                            <Text style={styles.textContent}>
                                {element.level}
                            </Text>
                        </View>   

                        <View  style={styles.contentTableName}>
                            <Text style={styles.textContent}>
                                {element.name}
                            </Text>
                        </View>   

                        <View  style={styles.contentTableScore}>
                            <Text style={styles.textContent}>
                                {element.score}
                            </Text>
                        </View>   
                    </View>   
                ))} 
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: "black", 
    },
    content:{
        marginLeft: 18,
        marginRight: 18, 
    },
    titleTable:{
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textTitle:{
        fontSize:20,
        color: '#fff',
    },
    textContent:{
        color: '#fff',
    },
    contentTable:{
        flex:1,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentTableName:{
        flex:2,
        borderColor: 'gray',
        borderWidth: 1,
    },
    contentTableScore:{
        flex:2,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    contentTableNameTitle:{
        flex:2,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentTableTitle:{
        flex:1,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentRow:{
        flexDirection: 'row',
    }
});

export default Lideres;