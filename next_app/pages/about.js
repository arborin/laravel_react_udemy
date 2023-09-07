import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout title="ABOUT PAGE" footer={`N KOBAIDZE copyrighgt ${new Date().getFullYear()}`}>
            <h1>About page</h1>
        </Layout>
    )
}


export default About;