import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { usePageContext } from '../../context/page';
import { ComponentProps } from 'react';

const Link: React.FC<GatsbyLinkProps<any>> = ({ to, ref, ...props }) => {
  const { lang, defaultLanguage } = usePageContext();
  let newTo = to;

  if (lang !== defaultLanguage) {
    newTo = `${lang}/${to}`;
  }

  return <GatsbyLink to={newTo} {...props} />;
};

export default Link;
