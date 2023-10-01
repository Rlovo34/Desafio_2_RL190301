import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
const backgroundImage = require('./img/fondo1.jpg')

const PantallaR = ({ route }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Estados de la cancion

  //arreglo para name y ruta de cancion
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

  useEffect(() => {
    const loadSound = async () => {

      //constructor para cargar ruta de la cancion
      try {
        const { sound } = await Audio.Sound.createAsync(pentakill[currentSongIndex].Ruta, {}, onPlaybackStatusUpdate);
        setSound(sound);
        await sound.playAsync();
        setIsPlaying(true);

        const status = await sound.getStatusAsync();
        setDuration(status.durationMillis);
      } catch (error) {
        console.error('Error al cargar y reproducir la canción', error);
      }
    };

    loadSound();

    return () => {
     


//Cargar cancion por id
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [route.params, currentSongIndex]);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setCurrentTime(status.positionMillis);
    }
  };

  //Pause y play de cancion
  const togglePlayback = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  //Siguiente y atras 
  const playNextSong = () => {
    sound.pauseAsync();
    if (currentSongIndex < pentakill.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const playPreviousSong = () => {
    sound.pauseAsync();
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Funcion para tiempo legible
  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  //Reproductor
  return (

    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

    <View style={styles.container}>
      <Image
        source={require('./img/rock/Pentakill.jpg')}
        style={styles.image}
      />
      
      <Text style={styles.artist}>Artista: Pentakill</Text>
      <Text style={styles.song}>Canción: {pentakill[currentSongIndex].name} ♫</Text> 
      <Text style={styles.timeText}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Text>

      
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        onValueChange={(value) => {
          if (sound) {
            sound.setPositionAsync(value);
            setCurrentTime(value);
          }
        }}
      />
      
      <TouchableOpacity
        style={styles.playButton}
        onPress={togglePlayback}
      >
        <Text style={styles.playButtonText}>
          {isPlaying ? 'II' : '▶'}
        </Text>
      </TouchableOpacity>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={playPreviousSong} 
        >
          <Text style={styles.controlButtonText}>◀||</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.controlButton}
          onPress={playNextSong} 
        >
          <Text style={styles.controlButtonText}>||▶</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

//Stilos
const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 10,
  },
  artist: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  song: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

  },
  timeText: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
  },
  slider: {
    width: '80%',
    marginTop: 20,
  },
  playButton: {
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  playButtonText: {
    color: 'white',
    fontSize: 24,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
  },
  controlButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default PantallaR;