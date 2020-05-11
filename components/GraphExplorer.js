import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class GraphExplorer extends React.Component {
    state = { nodes: [] }
    
    render() {
        return (
            <View style = {styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
    },
})


