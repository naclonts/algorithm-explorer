import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class GraphExplorer extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>{ this.props.graph.graph.nodeCount() }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
    },
});


export default GraphExplorer;
