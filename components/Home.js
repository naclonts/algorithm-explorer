import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to the Algorithm Explorer</Text>
            <Button
                title="Graph Explorer"
                onPress={() => navigation.navigate('GraphExplorer')}
            />
        </View>
    )
}
