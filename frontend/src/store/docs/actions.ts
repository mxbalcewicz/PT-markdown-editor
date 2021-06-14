import * as docsService from 'api/services/docs.service';
import { DocumentDetails } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Descendant } from 'slate';

interface ICreateDocumentPayload {
  content: Descendant[];
  hash: string;
}

interface IFetchOneDocumentArguments {
  hash: string;
  isReadOnly: boolean;
}

export const fetchOne = createAsyncThunk(
  'docs/fetchOne',
  async ({
    hash,
    isReadOnly,
  }: IFetchOneDocumentArguments): Promise<DocumentDetails> =>
    isReadOnly ? docsService.getReadOnly(hash) : docsService.get(hash),
);

export const fetchAll = createAsyncThunk('docs/fetchAll', docsService.getAll);

export const create = createAsyncThunk('docs/create', docsService.create);

export const deleteOne = createAsyncThunk(
  'docs/deleteOne',
  async (hash: string): Promise<string> => docsService.deleteOne(hash),
);

export const save = createAsyncThunk(
  'docs/save',
  async ({ hash, content }: ICreateDocumentPayload): Promise<DocumentDetails> =>
    docsService.save(hash, content),
);
