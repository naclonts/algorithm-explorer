import React from 'react'
import { connect } from 'react-redux'
import { addNode } from '../actions'
import { Button, Text, View } from 'react-native';

const AddNode = ({ dispatch }) => {
    return (
        <View>
            <Button
                style={{ width: 40, }}
                title="Add node"
                onPress={() => dispatch(addNode())}
            ></Button>
        </View>
    )
}

export default connect()(AddNode);
