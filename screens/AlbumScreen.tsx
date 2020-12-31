import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {useRoute} from '@react-navigation/native'

import SongListItem from '../components/SongListItem'
import SongListData from '../data/SongListData'

const AlbumScreen = () => {

	const route = useRoute()

	useEffect(() => {
		console.log(route)
	}, [])

	return(
		<View>
			<Text style={{color: 'white'}}>Hello from album screen</Text>
		</View>
	)
}

export default AlbumScreen