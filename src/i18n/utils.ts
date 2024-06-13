import { ui, defaultLanguage, showDefaultLang } from './ui';
import { projects } from './projects';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  }
}

export function useProjectsTranslations(lang: keyof typeof projects) {
  return function t(key: keyof typeof projects[typeof defaultLanguage]) {
    return projects[lang][key] || projects[defaultLanguage][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
      return !showDefaultLang && l === defaultLanguage ? path : `/${l}${path}`
    }
  }