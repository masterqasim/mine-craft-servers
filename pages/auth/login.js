import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <Layout>
        <Head>
            <title>Sign In</title>
        </Head>
        <Grid container spacing={2} style={{display:'flex',justifyContent:'center',padding:'10px 0px'}}>
          <Grid item xs={8}>
            <p style={{fontSize:'32px',marginTop:'21px',marginBottom:'10.5px'}}>Login</p>
            <hr style={{margin:'21px 0px'}} />
            <Grid container>
              <Grid item sm={12} md={6}>
                <Grid container style={{display:'flex',textAlign:'center'}}>
                  <p>Username</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p>Password</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p style={{backgroundColor:'#2880E3',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',width:'100px',display:'flex',alignItems:'center',flexDirection:'column'}}>
                    Login
                  </p> 
                </Grid>
                <Grid style={{padding:'10px 0px'}}>
                  <span style={{color:'#2880E3'}}> Forget Password</span>
                  <span style={{padding:'0px 5px'}}>|</span>
                  <span style={{color:'#2880E3'}}>
                  <Link href="/auth/signup">
                    Regiser
                  </Link>  
                  </span>

                </Grid>
              </Grid>
            </Grid>
            
                  <div style={{height:'40vh'}}>

                  </div>
          </Grid>
        </Grid>
    </Layout>
  )
}

export default Login