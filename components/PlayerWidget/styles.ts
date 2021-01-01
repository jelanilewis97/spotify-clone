import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	title:{
		color: 'white',
		fontSize: 18,
	},
	artist: {
		color: 'gray',
		fontSize: 15
	},
	image: {
		width: 75,
		height: 75,
	},
	container: {
		flexDirection: 'row',
		margin: 10,
		position: 'absolute',
		backgroundColor: 'black',
		width: '100%'
	},
	rightContainer: {
		justifyContent: 'space-around',
		marginLeft: 10,
	}
})

export default styles