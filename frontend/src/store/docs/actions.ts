import * as docsService from 'api/services/docs.service';
import { Document } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Descendant } from 'slate';

interface ICreateDocumentPayload {
  content: Descendant[];
  hash: string;
}

export const fetchOne = createAsyncThunk(
  'docs/fetchOne',
  async (hash: string): Promise<Document> => docsService.get(hash),
);

export const fetchAll = createAsyncThunk('docs/fetchAll', docsService.getAll);

export const create = createAsyncThunk('docs/create', docsService.create);

export const save = createAsyncThunk(
  'docs/save',
  async ({ hash, content }: ICreateDocumentPayload): Promise<Document> =>
    docsService.save(hash, content),
);
