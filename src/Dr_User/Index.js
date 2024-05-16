import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { Appbar, Avatar, Card, IconButton, Searchbar, useTheme } from 'react-native-paper'
import { Camera } from 'lucide-react-native';

const Landing = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const theme = useTheme();
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Dr Hub" subtitle="welcome back" style={styles.subtitle} />
                <IconButton icon="bell-outline" size={24} onPress={() => { }} />
                <IconButton icon="cart-outline" size={24} onPress={() => { }} />
            </Appbar.Header>
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </View>
            <View>
                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
            </View>
        </View>
    )
}

const createStyles = theme =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: 16
        },
        searchBar: {
            backgroundColor: "#F3F6F6"
        },
    });
export default Landing