import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
	data: any[]; // replace any with your blog data type
	loading: boolean;
	error: string | null;
}

const initialState: BlogState = {
	data: [],
	loading: false,
	error: null,
};

const blogSlice = createSlice({
	name: 'blogs',
	initialState,
	reducers: {
		fetchBlogsStart(state) {
			state.loading = true;
		},
		fetchBlogsSuccess(state, action: PayloadAction<any[]>) {
			// replace any[] with your blog data type
			state.data = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchBlogsFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } =
	blogSlice.actions;
export default blogSlice.reducer;
