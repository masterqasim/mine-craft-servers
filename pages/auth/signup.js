import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import Layout from '../../components/layout';

const signup = () => {
  return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <Grid container spacing={2} style={{display:'flex',justifyContent:'center',padding:'10px 0px'}}>
          <Grid item xs={8}>
            <p style={{fontSize:'32px',marginTop:'21px',marginBottom:'10.5px'}}>Register</p>
            <hr style={{margin:'21px 0px'}} />
            <Grid container>
              <Grid item sm={12} md={6}>
                <Grid container style={{display:'flex',textAlign:'center'}}>
                  <p>Username</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p>Password</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p>Confirm</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p>Email</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <p>Name</p>
                  <TextField fullWidth  id="fullWidth" style={{marginBottom:'15px'}}/>
                  <span style={{backgroundColor:'#2880E3',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',width:'100px',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  Register
                  </span> 
                  <span style={{padding:'0px 5px',display:'flex',alignItems:'center'}}>or</span>
                  <span style={{color:'#2880E3',display:'flex',alignItems:'center'}}>
                  <Link href="/auth/login">
                    Login
                  </Link>  
                  </span>
                </Grid>
              </Grid>
            </Grid>
            
                  <div style={{height:'10vh'}}>

                  </div>
          </Grid>
        </Grid>
    </Layout>
  )
}

export default signup