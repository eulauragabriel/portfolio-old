import Document, { Html, Head, Main, NextScript } from 'next/document';
import Layout from '../components/layout';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;