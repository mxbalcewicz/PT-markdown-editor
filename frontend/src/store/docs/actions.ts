import { DocsService } from '../../services';
import { Document } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Descendant } from 'slate';

export const fetchOne = createAsyncThunk(
  'docs/fetchOne',
  async (hash: string): Promise<Document> => {
    return DocsService.get(hash);
  },
);

export const create = createAsyncThunk(
  'docs/create',
  async (): Promise<Document> => {
    return DocsService.create();
  },
);

export const save = createAsyncThunk(
  'docs/save',
  async ({
    hash,
    content,
  }: {
    content: Descendant[];
    hash: string;
  }): Promise<Document> => {
    return DocsService.save(hash, content);
  },
);
