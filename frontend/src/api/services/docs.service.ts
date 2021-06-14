import http from 'api/http';
import { DocumentDetails, Document } from 'store/docs/slice';
import { Descendant } from 'slate';

export const getAll = async (): Promise<Document[]> => {
  const { data: documents } = await http.get(`/documents`);
  return documents;
};

export const get = async (hash: string): Promise<DocumentDetails> => {
  const { data: document } = await http.get(`/documents/${hash}`);
  return document;
};

export const getReadOnly = async (hash: string): Promise<DocumentDetails> => {
  const { data: document } = await http.get(`/documents/read/${hash}`);
  return document;
};

export const create = async (): Promise<DocumentDetails> => {
  const { data: document } = await http.post('/documents');
  return document;
};

export const deleteOne = async (hash: string): Promise<string> => {
  const { data: response } = await http.delete(`/documents/${hash}`);
  return response.hash;
};

export const save = async (
  hash: string,
  content: Descendant[],
): Promise<DocumentDetails> => {
  const { data: document } = await http.put(`/documents/${hash}`, { content });
  return document;
};
