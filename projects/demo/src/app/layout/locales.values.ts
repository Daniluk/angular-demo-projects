export interface ILocale {
  id: number;
  code: string;
  text: string;
}

export const locales: ILocale[] = [
  {
    id: 1,
    code: 'en',
    text: 'Engllish',
  },
  {
    id: 2,
    code: 'de',
    text: 'de',
  },
  {
    id: 3,
    code: 'fr',
    text: 'fr',
  },
  {
    id: 4,
    code: 'es',
    text: 'Es',
  },
  {
    id: 4,
    code: 'ru',
    text: 'ru',
  }
];
