import React from 'react';
import { PageContext } from '../src/context/page';

export function langWrapper({ element, props }) {
  const {
    pageContext: { lang, defaultLanguage },
  } = props;
  const { data } = props;

  // TODO: pass down more stuff

  return (
    <PageContext.Provider value={{ lang, defaultLanguage, data }}>
      {element}
    </PageContext.Provider>
  );
}
