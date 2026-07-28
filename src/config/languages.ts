export interface Language {
  code: string;
  name: string;
  localName: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', localName: 'English' },
  { code: 'hi', name: 'Hindi', localName: 'हिन्दी' }
];

export const defaultLanguage = 'en';
