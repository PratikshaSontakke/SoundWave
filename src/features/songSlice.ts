//Ducks pattern

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SongsState {
    songs: Song[];
    loading: boolean;
    nowPlaying: Song | null;
    isPlaying: boolean;
    status: string;

}

const initialState: SongsState = {
    songs: [],
    loading: false,
    nowPlaying: null,
    isPlaying: false,
    status: ""
};

export const getSongs = createAsyncThunk("songs/getSongs", async (offset: number) => {
    const response = await fetch(`https://itunes.apple.com/search/?term=top100&offset=${offset}&limit=10`);
    const data = await response.json();
    return data.results.map((song: any) => ({
        id: song.trackId,
        imageUrl: song.artworkUrl100,
        trackName: song.trackName,
        songUrl: song.previewUrl,
        artistName: song.artistName,
    }));
});

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        //

        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        }

    },
    extraReducers: builder => {
        builder
            .addCase(getSongs.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.songs.push(...action.payload);
                // state.entities = newEntities
                // state.status = 'idle'
            })
    }
})

export const { setNowPlaying } = songSlice.actions;
export default songSlice.reducer