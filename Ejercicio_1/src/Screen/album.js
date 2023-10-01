import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const PantallaDalbum = () => {

    //info del album 
    const pentakill = [
        { "id": 1, "name": "Cull", "Ruta": require('./music/Cull.mp3')},
        { "id": 2, "name": "Mortal Reminder", "Ruta": require('./music/Mortal_Reminder.mp3')},
        { "id": 3, "name": "Tear of the Goddess", "Ruta":  require('./music/Tear_of_the_Goddess.mp3')},
        { "id": 4, "name": "Infinity Edge", "Ruta":  require('./music/Infinity_Edge.mp3')},
        { "id": 5, "name": "Dead Man's Plate", "Ruta":  require('./music/Dead_Mans_Plate.mp3')},
        { "id": 6, "name": "The Hex Core mk-2", "Ruta":  require('./music/The_Hex_Core_mk-2.mp3') },
        { "id": 7, "name": "The Bloodthirster" , "Ruta":  require('./music/The_Bloodthirster.mp3')},
        { "id": 8, "name": "Frozen Heart", "Ruta":  require('./music/Frozen_Heart.mp3') },
        { "id": 9, "name": "Rapid Firecannon", "Ruta":  require('./music/Rapid_Firecannon.mp3')},
        { "id": 10, "name": "Blade of the Ruined King", "Ruta":  require('./music/Blade_of_the_Ruined_King.mp3')}
    ];

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('./img/rock/Pentakill.jpg')}
                style={styles.image}
            />
            <Text style={styles.albumName}>Pentakill</Text>
            {pentakill.map(song => (
                <View key={song.id} style={styles.songContainer}>
                    <Text style={styles.songText}>{song.id}. {song.name}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Reproductor', { songName: song.name })}
                        style={styles.playButton}
                    >
                        <Svg height="30" width="30">
                            <Polygon
                                points="10,5 10,25 25,15"
                                fill="black"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 20,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
    },
    albumName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    songContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: '80%',
        marginVertical: 5,
    },
    songText: {
        fontSize: 16,
    },
    playButton: {
        padding: 5,
    },
});

export default PantallaDalbum;
