import React from 'react'
import { Box, Container } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const Banner = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: '100px',
        }}
      >
        <Grid container >
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            
          }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#131E47',
                fontSize: '64px',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              Nupat Code Camp
            </Typography>
            <Typography variant='body1'
            sx={{
              color:'#131e47',
              fontSize:{
                lg:'24px'
              },
              mb:3
            }}
            >

            You are about to begin a journey to discovering the innovative
              part of you in the Tech World
</Typography>
            
            

            <Typography variant='body1'
              sx={{
                color:'#131e47',
                fontSize:{
                  lg:'24px'
                },
                mb:3
              }}
            >

              “ Technology gives the quitest student a Voice “ <br></br>-Jerry
              Blumengarten
            </Typography>
            <Typography variant='body1'
              sx={{
                color:'#131e47',
                fontSize:{
                  lg:'24px'
                },
                mb:3
              }}
            >
            Find your Voice with Nupat 
            </Typography>
            <Box>
            <Link href='/Register'><a>
    <Button variant='contained' sx={{fontSize:'12px',background:'#131e47', textTransform:'none', padding:'6px 28px'}}>Sign Up</Button>
    </a></Link>
    <Button variant='outlined' sx={{fontSize:'12px', border:'1px solid #131e47', color:'#131e47',textTransform:'none',padding:'5px 28px', marginLeft:'10px'}}>Sign In</Button>
            </Box>
            
          
          </Grid>
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
            justifyContent:'end'
          }}
          >
            <Box className='banner_img'
            sx={{
              width:{
                lg: '450px',
                md:'400px'
              },
              height:{
                lg: '450px',
                md: '400px'
              }, 
              borderRadius:'50%'
            }}
            >

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Banner
