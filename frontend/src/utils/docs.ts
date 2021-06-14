import { generatePath } from './router';
import Paths from 'constants/paths';

const createLink = (path: Paths, hash: string) => {
  const route = generatePath(path, { hash });
  const link = `${window.location.origin}${route}`;

  return [route, link];
};

export const createEditLink = (hash: string) =>
  createLink(Paths.EditDocument, hash);

export const createReadLink = (hash: string) =>
  createLink(Paths.ReadDocument, hash);
