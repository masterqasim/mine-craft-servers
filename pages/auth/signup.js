import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const signup = () => {
  return (
    <Layout>
        <Head>
            <title>Sign Up</title>
        </Head>
        <p>signup</p>
        <p> Read <Link href="/auth/login">this page!</Link></p>
    </Layout>
  )
}

export default signup