import React from 'react'
import {Text, View, FlatList} from 'react-native'
import {AlbumType} from '../../types'
import styles from './styles'
import Album from '../Album'

export type AlbumCategoryProps = {
  albumCategory: {
    title: string;
    albums: [AlbumType];
  }
}

const AlbumCategory = (props) => (
	<View style={styles.container}>
		{/*title of category*/}
		<Text style ={styles.title}>{props.title}</Text>
		{/*list of albums*/}
		<FlatList
			data={props.albums}
			renderItem={({item}) => <Album album={item} />}
			keyExtractor={(item) => item.id}
			showsHorizontalScrollIndicator={false}
			horizontal = {true}
		/>
	</View>
)

export default AlbumCategory