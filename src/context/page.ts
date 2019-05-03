import { createContext, useContext } from 'react';

interface PageContext<T> {
  lang: string;
  defaultLanguage: string;
  data: T;
}

export const PageContext = createContext<PageContext<any>>(null);

export function usePageContext<T>() {
  const data = useContext<PageContext<T>>(PageContext);

  return data;
}
