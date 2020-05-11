/**
 * Algorithm visualization app / AKA playing around in React Native
 */
// import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GraphExplorer from './components/GraphExplorer'
import Home from './components/Home'

const Stack = createStackNavigator()

function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GraphExplorer" component={GraphExplorer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
