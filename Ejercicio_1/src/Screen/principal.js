import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, } from 'react-native';


//Informacion de los albunes 
const RockBands = 
[
  { name: 'Pentakill', image: require('./img/rock/Pentakill.jpg'), album: 'Smite and Ignite' },
  { name: 'Hanabie', image: require('./img/rock/Hanabie.jpg'), album: 'Hanabie' },
  { name: 'System Of a Down', image: require('./img/rock/Toxicity.jpg'), album: 'Toxicity' },
  { name: 'Megadeth', image: require('./img/rock/Megadeth.jpg'), album: 'Rust in Peace' },
  { name: 'Rammstein', image: require('./img/rock/Rammstein.jpg'), album: 'Mutter' },
  { name: 'Slayer', image: require('./img/rock/Slayer.jpg'), album: 'Reign in Blood' },
  { name: 'Mago de  oz', image: require('./img/rock/Atlantia.jpg'), album: 'Atlantia' },
  { name: 'Lorna', image: require('./img/rock/Lorna.jpg'), album: 'Garden of Delight' },
  { name: 'Manson', image: require('./img/rock/Manson.jpg'), album: 'Antichrist Superstar' },
  { name: 'Mago de oz', image: require('./img/rock/Gaia.jpg'), album: 'Gaia' }
];

const ArtLatin = [
  { name: 'Bad Bunny', image: require('./img/latina/BadBunny.jpg'), album: 'Ultimo Tour' },
  { name: 'Celia Cruz', image: require('./img/latina/CeliaCruz.jpg'), album: 'Celia y Johnny' },
  { name: 'Juanes', image: require('./img/latina/Juanes.jpg'), album: 'Vida Cotidiana' },
  { name: 'Shakira', image: require('./img/latina/Shakira.jpg'), album: 'Dónde Están los Ladrones?' },
  { name: 'Gloria Estefan', image: require('./img/latina/GloriaEstefan.jpg'), album: 'Mi Tierra' },
  { name: 'J Balvin', image: require('./img/latina/JBalbin.jpg'), album: 'Colores' },
  { name: 'Ricky Martin', image: require('./img/latina/RickyMartin.jpg'), album: 'Tiburones' },
  { name: 'Selena Quintanilla', image: require('./img/latina/Selena.jpg'), album: 'Amor Prohibido' },
  { name: 'Daddy Yankee', image: require('./img/latina/DaddyYankee.jpg'), album: 'Barrio Fino' },
  { name: 'Marc Anthony', image: require('./img/latina/MarcAnthony.jpg'), album: 'Sigo Siendo Yo' },
];



const ArtHH = [
  { name: 'Eminem', image: require('./img/hiphop/Eminem.jpg'), album: 'The Marshall Mathers LP' },
  { name: 'XXXTentacion', image: require('./img/hiphop/Tentacion.jpg'), album: '?' },
  { name: 'Snoop Dogg', image: require('./img/hiphop/SnoopG.jpg'), album: 'California Times' },
  { name: 'Lil Nas X', image: require('./img/hiphop/LilNas.jpg'), album: 'Montero' },
  { name: 'Kendrick Lamar', image: require('./img/hiphop/KendrickLamar.jpg'), album: 'm.A.A.d city' },
  { name: 'Jay-Z', image: require('./img/hiphop/JayZ.jpg'), album: 'The Blueprint' },
  { name: 'Cardi B', image: require('./img/hiphop/CardiB.jpg'), album: 'Invasion of Privacy' },
  { name: 'Kanye West', image: require('./img/hiphop/KanyeWest.jpg'), album: 'My Beautiful Dark Twisted Fantasy' },
  { name: 'Nicki Minaj', image: require('./img/hiphop/NickiMinaj.jpg'), album: 'Pink Friday' },
  { name: 'Lil Wayne', image: require('./img/hiphop/LilWayne.jpg'), album: 'Tha Carter III' },
];





const PantallaPrincipal = ({ navigation }) => {




  return (


    <View style={styles.container}>


      <Text style={styles.title}>Rock</Text>
      <ScrollView horizontal>
        {RockBands.map((band, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Album')}
          >
            <Image source={band.image} style={styles.image} />
            <Text style={styles.imageText}>{band.name}</Text>
            <Text style={styles.imageTextA}>{band.album}</Text>

          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.title}>Latino</Text>
      <ScrollView horizontal>
        {ArtLatin.map((band, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Album')}
          >
            <Image source={band.image} style={styles.image} />
            <Text style={styles.imageText}>{band.name}</Text>
            <Text style={styles.imageTextA}>{band.album}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


      <Text style={styles.title}>Hip Hop</Text>
      <ScrollView horizontal>
        {ArtHH.map((band, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Album')}
          >
            <Image source={band.image} style={styles.image} />
            <Text style={styles.imageText}>{band.name}</Text>
            <Text style={styles.imageTextA}>{band.album}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


    </View>


  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 10, 
  },
  imageText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageTextA: {
    marginTop: 5,
    textAlign: 'center',
    
  },
});

export default PantallaPrincipal;
