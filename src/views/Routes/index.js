import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../HomeScreen";
import Lideres from "../Lideres";

const Routes = () =>{

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Inicio" component={HomeScreen} />
                <Stack.Screen name="Lideres" component={Lideres} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Routes;