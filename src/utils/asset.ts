/**
 * Resolves public asset URLs taking Vite's base path into account
 * (e.g. for GitHub Pages subpath deployment `/safarsathi-shimla-manali/`).
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base.endsWith('/') ? base : base + '/'}${cleanPath}`;
};
