import { createSlice } from '@reduxjs/toolkit';
import { deleteOne, fetchAll, fetchOne } from './actions';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from 'utils/actions';

export interface Document {
  id: string;
  title: string;
  hash: string;
  readHash: string;
}

export interface DocumentDetails extends Document {
  content: [];
}

interface DocsState {
  documents: Document[];
  document: DocumentDetails | null;
  isPending: boolean;
}

const initialState: DocsState = {
  documents: [],
  document: null,
  isPending: false,
};

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.documents = action.payload;
      state.isPending = false;
    });
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.document = action.payload;
      state.isPending = false;
    });
    builder.addCase(deleteOne.fulfilled, (state, action) => {
      state.documents = state.documents.filter(
        ({ hash }) => hash !== action.payload,
      );
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isPending = true;
    });
    builder.addMatcher(isRejectedAction, (state) => {
      state.isPending = false;
    });
    builder.addMatcher(isFulfilledAction, (state) => {
      state.isPending = false;
    });
  },
});

export default docsSlice.reducer;
