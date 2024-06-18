import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import {
    Card,
    Searchbar,
    Text,
    useTheme,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import { FONTS } from '../constant';


const SalesMan = require('../images/SalesMan.png');
const UserAvailable = require('../images/user2.png');

const AdminPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation(); // Hook for navigation

    const handlePress = () => {
        navigation.navigate('Drlist'); // Navigate to the Details screen
    };

    return (
        <View style={styles.container}>
            <AppBar userName="StarMedicahub" />

            <View style={styles.titleContainer1}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity
                    style={[styles.cardContainer, styles.cardCommonContainer]}
                    activeOpacity={0.7}>
                    <Card.Title
                        title="Star medica Hub"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        titleStyle={[styles.cardText, styles.cardTitle]}
                        subtitleNumberOfLines={null}
                        subtitleStyle={[styles.cardText, styles.cardSubTitle]}
                        left={() => (
                            <Image
                                source={SalesMan}
                                style={styles.cardImage}
                            />
                        )}
                        leftStyle={styles.leftStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.cardContainer2, styles.cardCommonContainer]}
                    onPress={handlePress}
                    activeOpacity={0.7}>
                    <Card.Title
                        title="Dr Hub List"
                        subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
                        titleStyle={[styles.cardText, styles.cardTitle]}
                        subtitleNumberOfLines={null}
                        subtitleStyle={[styles.cardText, styles.cardSubTitle]}
                        left={() => (
                            <Image
                                source={UserAvailable}
                                style={styles.cardImageSmall}
                            />
                        )}
                        leftStyle={styles.leftStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.cardContainer2, styles.cardCommonContainer]}
                    activeOpacity={0.7}>
                    <Card.Title
                        title="Company"
                        subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
                        titleStyle={[styles.cardText, styles.cardTitle]}
                        subtitleNumberOfLines={null}
                        subtitleStyle={[styles.cardText, styles.cardSubTitle]}
                        left={() => (
                            <Image
                                source={UserAvailable}
                                style={styles.cardImageSmall}
                            />
                        )}
                        leftStyle={styles.leftStyle}
                    />
                </TouchableOpacity>

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Search Products</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const createStyles = theme => {
    const { width } = Dimensions.get('window');
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 20,
        },
        titleContainer1: {
            marginTop: 6,
            marginBottom: 6,
        },
        cardCommonContainer: {
            height: 95,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 8,
            borderRadius: 15,
            marginVertical: 6,
            width: '100%',
        },
        searchBar: {
            backgroundColor: '#F3F6F6',
            borderRadius: 20,
        },
        cardText: {
            paddingHorizontal: 20,
            fontWeight: '500',
            fontFamily: FONTS.Comfortaa.Medium,
        },
        cardTitle: {
            fontSize: 20,
            color: '#000000',
        },
        cardSubTitle: {
            fontSize: 12,
            lineHeight: 15,
            color: '#767575',
        },
        cardContainer: {
            backgroundColor: '#E9F4F4',
        },
        cardContainer2: {
            backgroundColor: '#F8F8F8',
        },
        btncontainer: {
            marginTop: 36,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            backgroundColor: '#00c4cc',
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 30,
            width: '80%',
        },
        buttonText: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: FONTS.Comfortaa.Bold,
            textAlign: 'center',
            lineHeight: 17.8,
        },
        leftStyle: {
            paddingRight: 20,
        },
        cardImage: {
            width: 65,
            height: 65,
            borderRadius: 20,
        },
        cardImageSmall: {
            width: 60,
            height: 60,
            borderRadius: 20,
        },
        scrollViewContent: {
            flexGrow: 1,
        }
    });
};

export default AdminPage;
