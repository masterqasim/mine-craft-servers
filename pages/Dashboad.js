import React from 'react'
import Link from 'next/link';

import Login from './auth/login'
import Layout from '../components/layout';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
import Head from 'next/head';


const Dashboad = () => {
  return (
    <Layout>
        <Head>
            <title>Dashboard</title>
        </Head>
        <Grid container spacing={2} style={{display:'flex',justifyContent:'center',padding:'10px 0px'}}>
          <Grid item xs={8}>
            <p style={{fontSize:'32px',marginTop:'21px'}}>Best Minecraft Servers</p>
            <hr style={{margin:'21px 0px'}} />
            <Grid container>
              <Grid item sm={12} md={8}>
                <p>Top Minecraft Servers lists some of the<b> Best Minecraft Servers </b>on the web to play on. Browse down our 
                    list and discover an incredible selection of servers until you find one that appears to be ideal for you! Click on a server to 
                    learn more about it, or just copy the ip address into your Minecraft client and find out for yourself just how great it is.</p>
                    <hr style={{margin:'21px 0px'}} />
                <Grid container style={{display:'flex',textAlign:'center'}}>
                  {/* <Grid item style={{backgroundColor:'#2880E3',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px'}}>
a
                  </Grid>
                  <Grid item style={{backgroundColor:'#2880E3',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px'}}>
b
                  </Grid> */}
                 <p style={{backgroundColor:'#2880E3',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',width:'50%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  <Icon icon="raphael:user" width="30" />
                  <Link href="/auth/signup">
                    Register
                  </Link>  
                  </p> 
                 <p style={{backgroundColor:'#222',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',width:'50%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  <Icon icon="entypo:login" width="30" />
                  <Link href="/auth/login">
                    Login
                  </Link> 
                  </p>   
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
             <Grid item sm={12} md={2.5} style={{backgroundColor:'#222',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',margin:'15px 15px 15px 0px',textAlign:'center'}}>
              <select style={{backgroundColor:'#222',border:'0px',outline:'none'}}>
                <option>sort  </option>
              </select>
              </Grid> 
             <Grid item sm={12} md={2.5} style={{backgroundColor:'#222',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',margin:'15px',textAlign:'center'}}>
             <select style={{backgroundColor:'#222',border:'0px',outline:'none'}}>
                <option>type  </option>
              </select>
              </Grid>     
             <Grid item sm={12} md={2.5} style={{backgroundColor:'#222',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',margin:'15px',textAlign:'center'}}>
             <select style={{backgroundColor:'#222',border:'0px',outline:'none'}}>
                <option>version  </option>
              </select>
              </Grid>     
             <Grid item sm={12} md={2.5} style={{backgroundColor:'#222',color:'white',marginLeft:'0px',fontSize:'19px',padding:'10px 30px',margin:'15px',textAlign:'center'}}>
             <select style={{backgroundColor:'#222',border:'0px',outline:'none'}}>
                <option>country  </option>
              </select>
              </Grid>     

            </Grid>
                  <div style={{height:'40vh'}}>

                  </div>
          </Grid>
        </Grid>
    </Layout>
  )
}

export default Dashboad