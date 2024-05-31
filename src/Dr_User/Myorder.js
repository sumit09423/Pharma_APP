import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

const Myorder = (props) => {
    return (
        <View>
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                <Appbar.Content title="Product Details" style={styles.centerTitle} />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header></View>
    )
}

const styles = StyleSheet.create({})

export default Myorder