import Movie from './components/movie.js';
import Button from './components/button.js';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import movies from './assets/movies.json';

const terminator2Image = require('./assets/t2.jpg');
const terminator1Image = require('./assets/terminator1.jpg');
const titanicImage = require('./assets/titanic.jpg');


export default function App() {
  const [movieIndex, setMovieIndex] = useState(0);
  const imageList = [terminator2Image, terminator1Image, titanicImage];

  const handleMoviePress = (index) => {
      setMovieIndex(index);
  }

  return (
      <View style={styles.container}>
        <Text>Top 3 Movies</Text>
        <Movie movie={movies[movieIndex]} image={imageList[movieIndex]} />
        { movies.map( (movie, index ) => {
            return <Button label={index} onPress={handleMoviePress} key={index} />
         })
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
