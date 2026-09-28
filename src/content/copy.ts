import english from './en.json';
import somali from './so.json';

export type CopyKey = keyof typeof english;
export type SomaliEntry = { text: string; reviewed: boolean };
export type SomaliCopy = Record<CopyKey, SomaliEntry>;
export type CopyMode = 'development' | 'production';

export const englishCopy = english;
export const somaliCopy: SomaliCopy = somali;

export function resolveCopy(
  key: CopyKey,
  mode: CopyMode,
  entries: SomaliCopy = somaliCopy,
): string {
  const translated = entries[key];
  return mode === 'production' && translated.reviewed
    ? translated.text
    : englishCopy[key];
}
