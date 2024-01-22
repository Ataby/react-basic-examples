import React from 'react'
import {TextField,CssBaseline,Button,Box,Container,Link,Avatar,Typography } from "@mui/material"
import  LockOutlinedIcon  from "@mui/icons-material/LockOutlined"

 const SignUp = () => {
  return (
    <Container maxWidth="xs">
    <Box component="form" sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
        <Avatar sx={{mx:"auto", bgcolor:"orange"}}><LockOutlinedIcon/></Avatar>
        <Typography variant="h5" sx={{}}>Sign In</Typography>
        <TextField margin='normal' label="name" required autoFocus />
        <TextField margin='normal' label="email" required/>
        <TextField label="password" margin='normal' required type='password' />
        <Button  variant='contained' type='submit' sx={{mt:2, p:1}}>Sign Up</Button>
        <Box sx={{ display:"flex", flexDirection:"column",lineHeight:"2rem", marginTop:"1rem"}}>
         
        <Link to="/signin">Already have an account ? Sign in</Link>
        </Box>
    </Box>
    </Container>
  )
}

export default SignUp