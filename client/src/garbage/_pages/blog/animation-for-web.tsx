import React from 'react';
import Template from '../../utils/blog-templates/ContentTemplate';

const sentences = {
    first: `
ここでは、webにおけるアニメーションについてやりたいと思います。
`}

const Content = () => {
    return (
        <div>
            <p>{sentences.first}.</p>
        </div>
    )
}
export default Template(<Content />, "webアニメーション");
