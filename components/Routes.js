import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import GraphExplorer from './GraphExplorer'

const Routes = () => {
    return (
        <Router>
            <Scene key = "root">
                <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                <Scene
                    key = "graph-explorer"
                    component = {GraphExplorer}
                    title = "Graph Explorer"
                />
            </Scene>
        </Router>
    )    
}

export default Routes

