import API from '../plugins/axios';
import { Document } from '../store/docs/slice';
import { Descendant } from 'slate';

export const get = async (hash: string): Promise<Document> => {
  const { data: document } = await API.get(`/documents/${hash}`);
  return document;
};

export const create = async (): Promise<Document> => {
  const { data: document } = await API.post('/documents');
  return document;
};

export const save = async (
  hash: string,
  content: Descendant[],
): Promise<Document> => {
  const { data: document } = await API.put(`/documents/${hash}`, { content });
  return document;
};
