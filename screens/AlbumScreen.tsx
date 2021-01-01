import React, {useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import {useRoute} from '@react-navigation/native'

import SongListItem from '../components/SongListItem'
import SongListData from '../data/SongListData'
import AlbumHeader from '../components/AlbumHeader'

const AlbumScreen = () => {

	const route = useRoute()
	const album = route.params.props.album

	useEffect(() => {
		console.log(route)
	}, [])

	return(
		<View>
			<FlatList
				data={album.songList.songList}
				renderItem={({item}) => <SongListItem song={{imageURI: album.imageURI, artist: album.artistsHeadline, id: album.id, title: item.title, album: album.title}} />}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <AlbumHeader album={album}/>}
			/>
		</View>
	)
}

export default AlbumScreen