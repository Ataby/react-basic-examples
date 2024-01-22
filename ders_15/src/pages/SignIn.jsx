import React from 'react'
import {TextField,CssBaseline,Button,Box,Container,Link,Avatar,Typography } from "@mui/material"
import  LockOutlinedIcon  from "@mui/icons-material/LockOutlined"

 const SignIn = () => {
  return (
    <Container maxWidth="xs">
    <Box component="form" sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
        <Avatar sx={{mx:"auto", bgcolor:"orange"}}><LockOutlinedIcon/></Avatar>
        <Typography variant="h5" sx={{}}>Sign In</Typography>
        <TextField margin='normal' label="email" required autoFocus />
        <TextField label="password" margin='normal' required type='password' />
        <Button  variant='contained' type='submit' sx={{mt:2, p:1}}>Sign In</Button>
        <Box sx={{ display:"flex", flexDirection:"column",lineHeight:"2rem", marginTop:"1rem"}}>
        <Link>Forgot Password</Link>
        <Link to="/signup">Don't have an account ? Sign up</Link>
        </Box>
    </Box>
    </Container>
  )
}

export default SignIn