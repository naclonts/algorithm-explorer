import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddNode from './AddNode'


function GraphView({ graph }) {
    return (
        <View style = {styles.container}>

            <Text>There are { graph.nodeCount() } nodes</Text>
            <AddNode></AddNode>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        width: 500,
        height: 500,
    },
});

export default GraphView;
