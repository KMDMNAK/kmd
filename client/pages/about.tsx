import React from 'react'

import Template from '@/components/Template'
import TextField from '@/components/Template/TextField'

const Logo: React.FC<{ src: string, redirectUrl: string, width: number, height: number }> = props => {
  return (
    <span style={{ padding: "10px" }}>
      <a href={props.redirectUrl} target="_blank">
        <img src={props.src} width={props.width} height={props.height} />
      </a>
    </span>
  )
}
const Logos: React.FC = () => {
  return (
    <div>
      <Logo src="/GitHub-Mark.png" width={32} height={32} redirectUrl="https://github.com/KMDMNAK" />
      <Logo src="/qiita-square.png" width={32} height={32} redirectUrl="https://qiita.com/KMD" />
      <Logo src="/Medium-Logo.svg" width={64} height={32} redirectUrl="/" />
      <Logo src="/stackoverflow-logo-jp.svg" width={64} height={32} redirectUrl="https://stackoverflow.com/users/16142324/m-kmd" />
      <Logo src="/gitlab-logo.svg" width={64} height={32} redirectUrl="https://gitlab.com/KMDMNAK" />
    </div >
  )
}
const IndexPage: React.FC = () => {
  return (
    <Template
      title="About"
      meta=""
      textField={<TextField title="About" >
        <p>2020年3月に情報系の大学を卒業後、新卒でIT企業に入社してからエンジニアをやっています。
        バックからフロント、クラウド等、ある程度は扱えるつもりです。
        現在は競技プログラミングに取り組み中！
        </p>
        <div style={{ marginTop: "50px" }}>
          <Logos />
        </div>
      </TextField>}
    />
  )
}
export default IndexPage