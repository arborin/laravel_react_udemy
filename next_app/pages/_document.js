import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta property="og:title" content="My page title" key="title" />
                    <link rel="icon" type="image/x-icon" href="/static/favicon.png"></link>
                    {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" /> */}
                    <link rel='stylesheet' href='/static/style.css' />
                </Head>
                <body>
                    <div className='bg'>
                        <Main />
                        <NextScript />
                    </div>
                </body>
            </Html>
        )
    }
}


export default MyDocument;