import React from 'react'
import {Text, Image, View} from 'react-native'
//import {Song} from '../types'

import styles from './styles'

export type SongListItemProps = {
	//song: Song
}

const SongListItem = (props: SongListItemProps) => {
	return(
		<View>
			<Image source={{uri: props.song.imageURI}} />
			<Text>{props.song.title}</Text>
			<Text>{props.song.artist}</Text>
		</View>
	)
}

export default SongListItem