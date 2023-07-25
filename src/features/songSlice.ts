
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongList } from '@/apis/SongApi';

interface SongsState {
    songs: Song[];
    loading: boolean;
    isPlaying: boolean;
    currentSong: Song | null;
    status: string;
    error: string;
    offsetParam: number;
    searchParam: string;
    isOffsetLoading: boolean;

}

const initialState: SongsState = {
    songs: [],
    loading: false,
    isPlaying: false,
    currentSong: null,
    status: "",
    error: "",
    offsetParam: 1,
    searchParam: "sonu",
    isOffsetLoading: false
};

interface SongProps {
    trackId: string;
    artworkUrl100: string;
    trackName: string;
    previewUrl: string;
    artistName: string;
    releaseDate: Date;
    primaryGenreName: string;
}

interface GET_SONGS_QUERY_PROPS {
    offset?: number;
    searchTerm?: string;
}

export const getSongs = createAsyncThunk("songs/getSongs", async (props: GET_SONGS_QUERY_PROPS) => {
    const { offset, searchTerm } = props;
    const data = await getSongList({ offset, searchTerm });
    return data.results.map((song: SongProps) => ({
        id: song.trackId,
        imageUrl: song.artworkUrl100.replace("100x100", "900x900"),
        trackName: song.trackName,
        songUrl: song.previewUrl,
        artistName: song.artistName,
        releaseDate: song.releaseDate,
        primaryGenreName: song.primaryGenreName
    }));
});

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setCurrentSong: (state, action: PayloadAction<Song>) => {
            state.currentSong = action.payload;
        },
        setOffsetParam: (state, action: PayloadAction<number>) => {
            state.offsetParam = action.payload
        },
        setSearchParam: (state, action: PayloadAction<string>) => {
            state.searchParam = action.payload
        }
    },

    extraReducers: builder => {
        builder
            .addCase(getSongs.pending, (state, action) => {

                if (action?.meta?.arg?.offset === 1) {
                    state.loading = true;
                    return;
                }
                state.isOffsetLoading = true;
            })
            .addCase(getSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.isOffsetLoading = false

                if (action?.meta?.arg?.offset === 1) {

                    state.songs = action.payload
                    return;
                }
                state.songs.push(...action.payload);
            })
            .addCase(getSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
                state.isOffsetLoading = false
            })
    }
})

export const { setIsPlaying, setCurrentSong, setOffsetParam, setSearchParam } = songSlice.actions;
export default songSlice.reducer