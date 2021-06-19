import React, { useEffect, useState } from 'react'

import Template from '@/components/Template'
import TextField from '@/components/Template/TextField'
import { useRouter } from 'next/dist/client/router'
import { ArticleContetAPIResponse } from 'pages/api/articlecontent'
import ShadowDOM from 'react-shadow';
import Casper from '@/components/Casper'

import Api from '@/modules/api'

const BlogContentPage: React.FC = () => {
    const router = useRouter()
    const [article, setArticle] = useState<DataType.Article>()
    console.debug('router.route', router.route, router.query)
    useEffect(() => {
        if (!router.query.postId) return
        const core = Api.get()
        core.getArticleContent(router.query.postId as string)
            .then(res => res.json())
            .then((res: ArticleContetAPIResponse) => setArticle(res.article))
    }, [router.query])
    return (
        <Template
            title={article ? article.title : "None"}
            meta=""
            textField={<TextField title={article ? article.title : "None"} >
                {
                    article ?
                        <ShadowDOM.div>
                            {/* <link href="/Casper/global.css" rel="stylesheet"></link>
                        <link href="/Casper/screen.css" rel="stylesheet"></link> */}
                            <Casper />
                            <article className="post-full post">
                                <div className="post-full-content">
                                    <div className="post-content" dangerouslySetInnerHTML={{ __html: article?.content }}>
                                        {/* <span  ></span> */}
                                    </div>
                                </div>
                                <script src="/Casper/casper.js"></script>
                            </article>
                        </ShadowDOM.div> :
                        <></>
                }
            </TextField>
            }
        />
    )
}

export default BlogContentPage