import React from 'react'
import {Text, View, Image} from 'react-native'

import styles from './styles'
import {Song} from '../../types'

export type PlayerWidgetProps = {
	song: Song
}

const PlayerWidget = (props: PlayerWidgetProps) => {
	const {song} = props
	return(
		<View style={styles.container}>
			<Image source={{uri: song.imageURI}} style={styles.image}/>
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{song.title}</Text>
				<Text style={styles.artist}>{song.artist}</Text>
			</View>
		</View>
	)
}

export default PlayerWidget