import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import { useState  } from 'react';
//MATERIAL UI PROPLARI FAZLA OLDUGU ICIN DOKUMANTASYONA BAKILMALI
const TextFieldComp = () => {
    const [error, seterror] = useState(false)
  return (
    <div>
        <Container>
            <Typography variant='h3' color="primary" align='center ' mt={3}>
                Typography
            </Typography>
        </Container>

        <Box sx={{mt:4}}>
            <TextField margin='dense' id="email" label="Email" fullWidth
            error={error} helperText={error && " Incorrect email format"} />
            <TextField id="password" label="Password" fullWidth
            error={error} helperText={error && " Incorrect password"} margin='normal'/>
            <Button variant='contained' color='warning'> Submit</Button>
        </Box>
    </div>
  )
}

export default TextFieldComp; 