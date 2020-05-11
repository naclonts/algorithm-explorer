import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GraphView({ graph }) {
    return (
        <View style = {styles.container}>
            <Text>There are { graph.nodeCount() } nodes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
    },
});

export default GraphView;
