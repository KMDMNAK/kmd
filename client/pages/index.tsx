import React from 'react'

import Template from '@/components/Template'
import TextField from '@/components/Template/TextField'
const IndexPage: React.FC = () => {
  return (
    <Template
      title="はじめに"
      meta=""
      textField={(
        <TextField title="はじめに" >
          <p>しがないエンジニアです。</p>
          <p>このサイトでは、好きなものをつらつら書いたり作ったりしていきたいですね。</p>
        </TextField>
      )}
    />
  )
}
export default IndexPage