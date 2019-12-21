import Document, { Head, Main, NextScript } from 'next/document'

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
                        {`body{display:none}`}
                    </style>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument