import {StyleSheet} from 'react-native'

const dimension = 175

const styles = StyleSheet.create({
	title:{
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	},
	artist: {
		color: 'white',
		fontSize: 20,
	},
	image: {
		width: dimension,
		height: dimension,
		justifyContent: 'center',
		margin: 10,
	},
	container: {
		margin: 10,
		alignItems: 'center',
	},
	info: {
		color: 'lightgray',
		fontSize: 15,
		margin: 2,
	},
	button: {
		backgroundColor: '#1CD05D',
		height: 50,
		width: 150,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10

	},
	buttonText: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
	}

})

export default styles