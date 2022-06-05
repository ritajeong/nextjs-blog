import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Rita's Devlog</title>
        </Head>
        <h1>Rita's Devlog</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
