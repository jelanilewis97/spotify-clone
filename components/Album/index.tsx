import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
import {AlbumType} from '../../types'
import {useNavigation} from '@react-navigation/native'

export type AlbumProps = {
  album: AlbumType,
}

const Album = (props: AlbumProps) => {

	const navigation = useNavigation()

	const onPress = () => {
		navigation.navigate('AlbumScreen', {props})
	}

	return(
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Image source={{uri: props.album.imageURI}} style={styles.image}/>
				<Text style={styles.title}>{props.album.title}</Text>
				<Text style={styles.text}>{props.album.artistsHeadline}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Album