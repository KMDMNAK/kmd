import Document, { Head, Main, NextScript } from 'next/document'

const CustomDocument = () => {
    const getInitialProps = async (ctx: any) => {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    return (
        <html>
            <Head>
                {/* <script src="https://cdn.jsdelivr.net/npm/frappe-charts@1.2.4/dist/frappe-charts.min.iife.js"></script> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
    )

}

export default CustomDocument
