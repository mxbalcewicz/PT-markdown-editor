export const generatePath = (
  path: string,
  params: { [key: string]: string | number },
): string => {
  return Object.keys(params).reduce(
    (path, key) => path.replace(`:${key}`, `${params[key]}`),
    path,
  );
};
