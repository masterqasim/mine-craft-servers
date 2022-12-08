import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const login = () => {
  return (
    <Layout>
        <Head>
            <title>Sign In</title>
        </Head>

        <Grid container spacing={2} style={{display:'flex',justifyContent:'center'}}>
          <Grid item xs={8}>
            <p style={{fontSize:'32px',marginTop:'21px'}}>Login</p>
            <hr/>
          </Grid>
        </Grid>
        <div className=''>
          

        </div>
        <p> Read <Link href="/auth/signup">this page!</Link></p>
    </Layout>
  )
}

export default login