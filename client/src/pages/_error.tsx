import React, { createContext, useContext } from 'react';
import { NextPage, NextPageContext } from 'next';
import Template from '../components/PageTemplate'
// production時(next buildの成果物を使っている時)のエラー表示に使われる
// See Also: https://nextjs.org/docs/advanced-features/custom-error-page

const StatusCodeContext = createContext<number>(0)
const Content: React.FC = () => (<>
    <div>{useContext(StatusCodeContext)}</div>
</>)

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
    return (
        <StatusCodeContext.Provider value={statusCode}>
            <Template
                title="エラーが発生しました"
                Content={Content}
            />
        </StatusCodeContext.Provider>
    )
};

export default Error;
