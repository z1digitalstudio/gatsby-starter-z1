declare module "*.svg" {
  const content: React.ComponentType<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.module.scss" {
  const content: Record<string, string>
  export default content
}
