import {StyleSheet} from 'react-native'

const imageDimension = 140

const styles = StyleSheet.create({
	container: {
		width: imageDimension,
		margin: 10
	},
	image: {
		width: '100%',
		height: imageDimension,
	},
	text: {
		color: 'grey',
		fontSize: 18
	},
	title: {
		color: 'white',
		marginTop: 10,
		fontSize: 20,
	}
})

export default styles