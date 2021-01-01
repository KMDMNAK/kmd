import Document, { Head, Main, NextScript } from 'next/document'
import styles from '../utils/document.css'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                </Head>
                <body>
                    <style>
                        {`body{
                            display:none;
                            background-color: #493759;
                            color: white;
                            font-family: 'Times New Roman', Times, serif;
                        }`}
                    </style>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument
