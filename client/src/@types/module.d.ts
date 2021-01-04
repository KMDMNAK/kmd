declare module '*.png'
declare module '*.jpg'
declare module '*.gql'
declare module '*.svg'

declare module '*.md' {
    let MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
}

declare module '*.css'