import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'

import {AlbumType} from '../../types'
import styles from './styles'

export type AlbumHeaderProps ={
	album: AlbumType
}

const AlbumHeader = (props: AlbumHeaderProps) => {
	return(
		<View style={styles.container}>
			<Image source={{uri: props.album.imageURI}} style={styles.image} />
			<Text style={styles.title}>{props.album.title}</Text>
			<Text style={styles.artist}>{props.album.artistsHeadline}</Text>
			<Text style={styles.info}>Album • {props.album.year}</Text>
			<TouchableOpacity>
				<View style={styles.button}>
					<Text style={styles.buttonText}>PLAY</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default AlbumHeader