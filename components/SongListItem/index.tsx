import React from 'react'
import {Text, Image, View, TouchableOpacity} from 'react-native'
import {Song} from '../types'

import styles from './styles'

export type SongListItemProps = {
	song: Song
}

const SongListItem = (props: SongListItemProps) => {
	return(
		<TouchableOpacity style={styles.container}>
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{props.song.title}</Text>
				<Text style={styles.artist}>{props.song.artist}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SongListItem