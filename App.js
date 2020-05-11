/**
 * Algorithm visualization app / AKA playing around in React Native
 */
// import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { addNode } from './actions'
import rootReducer from './reducers';
import GraphExplorer from './components/GraphExplorer';
import Home from './components/Home';

const Stack = createStackNavigator();
const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="GraphExplorer" component={GraphExplorer} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

// Print state changes
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addNode());
store.dispatch(addNode());
store.dispatch(addNode());
unsubscribe();

export default App;
