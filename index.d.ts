declare module '*.jpg'
declare module '*.jpeg'
declare module '*.mp4'
declare module '*.ogv'
declare module '*.webm'

declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}
