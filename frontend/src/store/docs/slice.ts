import { createSlice } from '@reduxjs/toolkit';
import { fetchOne } from './actions';

export interface Document {
  hash: string;
  content: [];
}

interface DocsState {
  document: Document | null;
  isPending: boolean;
}

const initialState: DocsState = {
  document: null,
  isPending: false,
};

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOne.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.document = action.payload;
      state.isPending = false;
    });
    builder.addCase(fetchOne.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default docsSlice.reducer;
