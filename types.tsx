export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {
	id: string;
    imageURI: string;
    artistsHeadline: string;
    title: string;
    songList: Song[];
    year: string;
}

export type Song = {
	id: string;
	imageURI: string;
	title: string;
	artist: string;
	album: string;

}