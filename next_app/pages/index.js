import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => {
    return (
        <Layout title="MAIN PAGE" footer={`copyrighgt ${new Date().getFullYear()}`}>
            <Head>
                <title>My page title</title>
            </Head>
            <h1>Home page</h1>
            <img src="/static/logo.jpg" height="100" />
        </Layout>
    )
}

export default Index;