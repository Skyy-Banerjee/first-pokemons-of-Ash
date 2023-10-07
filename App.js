import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
	const charmanderData = {
		name: '#04 Charmander',
		image: require('./assets/charmander.png'),
		type: 'Fire',
		hp: 39,
		moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
		weaknesses: ['Water', 'Rock'],
	};
	const squirtleData = {
		name: '#07 Squirtle',
		image: require('./assets/squirtle.png'),
		type: 'Water',
		hp: 44,
		moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
		weaknesses: ['Electric', 'Grass'],
	};
	const bulbasaurData = {
		name: '#01 Bulbasaur',
		image: require('./assets/bulbasaur.png'),
		type: 'Grass',
		hp: 45,
		moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
		weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
	};

	const pikachuData = {
		name: '#25 Pikachu',
		image: require('./assets/pikachu.png'),
		type: 'Electric',
		hp: 35,
		moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
		weaknesses: ['Ground'],
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<PokemonCard {...bulbasaurData} />
				<PokemonCard {...pikachuData} />
				<PokemonCard {...charmanderData} />
				<PokemonCard {...squirtleData} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
});
