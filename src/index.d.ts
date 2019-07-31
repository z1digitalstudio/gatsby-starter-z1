declare module '*.svg' {
  export const ReactComponent: React.ComponentType<
    React.SVGAttributes<SVGElement>
  >;

  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
