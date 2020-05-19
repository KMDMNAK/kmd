import React from 'react';
import styles from '../style.css'
import { SetSentence } from '../../../utils/sentence';

const sentences = [
    "web engineerの卵です。都内の大学を出た後、都内のIT系ベンチャー?に入社予定。\
    職場では、主にNode, Reactを利用したwebアプリの開発(まだ勉強中)を行っています。\
    趣味ではpythonでの画像処理やデータ分析等をやっています(やっていきたい)。",
    "当サイトでは、開発物の紹介や、その他ジャンルに関係なくブログにしたいと思っているので、よかったら見てください。",
    "当サイトは、UIにはNext.jsを、apiにはgraphqlを利用して構築しています。"
]

const About = () => {
    return (
        <div className={styles.column} id="ABOUT">
            <h1>This is ABOUT!!</h1>
            <div className={styles.column_content}>
                <SetSentence sentences={sentences} />
                <div>
                    <span>
                        <a href="https://github.com/KMDMNAK"><img src="/static/GitHub-Mark.png" /></a>
                    </span>
                    <span>
                        <a href="https://qiita.com/KMD"><img src="/static/qiita-square.png" width="64" height="64" /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default About;
