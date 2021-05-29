import http from '../http';
import { Document } from '../../store/docs/slice';
import { Descendant } from 'slate';

export const getAll = async (): Promise<Document[]> => {
  const { data: documents } = await http.get(`/documents`);
  return documents;
};

export const get = async (hash: string): Promise<Document> => {
  const { data: document } = await http.get(`/documents/${hash}`);
  return document;
};

export const create = async (): Promise<Document> => {
  const { data: document } = await http.post('/documents');
  return document;
};

export const save = async (
  hash: string,
  content: Descendant[],
): Promise<Document> => {
  const { data: document } = await http.put(`/documents/${hash}`, { content });
  return document;
};
