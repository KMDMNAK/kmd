declare module '*.png'
declare module '*.jpg'
declare module '*.gql'

declare global {
    namespace NodeJS {
        fetch
    }
}
declare module '*.md' {
    let MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
  }