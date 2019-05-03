import { createContext, useContext } from 'react';

export const PageContext = createContext<any>(null);

export function usePageContext<T>() {
  const data = useContext<T>(PageContext);

  return data;
}
