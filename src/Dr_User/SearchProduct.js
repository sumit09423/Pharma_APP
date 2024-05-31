import React, { useState } from 'react';
import { Appbar, IconButton, Searchbar, Text } from 'react-native-paper';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SalesMan = require('../images/Medisine.png');

const SearchProduct = props => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const data = [
        {
            title: "Injectables",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "injectablesIcon"
        },
        {
            title: "Sinusitis",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "sinusitisIcon"
        },
        {
            title: "Tonsillitis",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "tonsillitisIcon"
        },
        {
            title: "Mauris posuere ullamcorper",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "maurisIcon"
        },
        {
            title: "Nullo blandit lectus",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "nulloIcon"
        },
        {
            title: "Donec dopibus dignissim",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "donecIcon"
        },
        {
            title: "Nunc non odio id",
            description: "Duis vitae turpis elementum, ullamcorper tortor vel",
            icon: "nuncIcon"
        }
    ];

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MultipleProduct', { item })}>
            <View style={styles.cardContainer}>
                <View style={styles.ImageView}>
                    <Image
                        source={SalesMan}
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description} numberOfLines={null}>
                        {item.description}
                    </Text>
                </View>
                <IconButton
                    icon="chevron-right"
                    size={24}
                    onPress={() => {
                    }}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                <Appbar.Content title="Gynecologist Medicine" style={styles.centerTitle} />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>

            <View style={styles.container}>


                <View style={styles.titleContainer1}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={styles.searchBar}
                    />
                </View>

                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        padding: 16
    },
    containerMain: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F9',
    },
    titleContainer1: {
        marginVertical: 12
    },
    searchBar: {
        marginBottom: 12,
        borderRadius: 12
    },
    cardContainer: {
        backgroundColor: "#F5F5F9",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        marginVertical: 8
    },
    ImageView: {
        backgroundColor: "#FCFCFF",
        padding: 8
    },
    textcontainer: {
        flex: 1,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: "Comfortaa"
    },
    description: {
        fontSize: 12,
        marginTop: 4,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 8
    }
});

export default SearchProduct;
