import Link from 'next/link';
import Nav from '../components/Nav';
import Head from 'next/head';

const Index = () => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Nav />
            <h1>Home page</h1>
        </div>
    )
}

export default Index;