import { Image, Text } from 'react-native';

export default function Movie( {movie, image} ) {
    return (
        <>
            <Text>{movie.name}</Text>
            <Image source={image}  />
            <Text>{movie.year}</Text>
            {
                movie.actors.map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}