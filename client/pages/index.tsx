import React, { useEffect } from 'react'

import Template from '@/components/Template'
import TextField from '@/components/Template/TextField'
import A from '@/components/Casper'
import ShadowDOM from 'react-shadow';


const IndexPage: React.FC = () => {
  return (
    <Template
      title="はじめに"
      meta=""
      textField={(
        <TextField title="はじめに" >
          <div id="shadow-root"></div>

          <ShadowDOM.div>
            <A />
            <p>しがないITエンジニアです。</p>
            <p>メインとしてサーバーをやっていきたいのですが、実際に個人開発をするとなると、フロントばっかりやってますね。</p>
            <p>このサイトでは、好きなものをつらつら書いたり作ったりしていきたいです。</p>
            <p>コンテンツがないので、これから作っていきます。理想はブログと、時事に合わせたコンテンツページの作成です！</p>
            <p>見てくれている方、ありがとうございます。</p>
          </ShadowDOM.div>

        </TextField >
      )}
    />
  )
}
export default IndexPage
