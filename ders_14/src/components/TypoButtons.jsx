//MATERIAL UI => 3rd PARTY KUTUPHANE STYLING KUTUPHANESI REACT-BOOTSTRAP GIBI(COMPONENT-BASED).

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return <div>
    {/* TYPOGRAPHY BIR COMPONENTTIR, 'variant' ve 'component' BUNuN PROPLARIDIR. TUM COMPONENTLER AYNI PROPLARA SAHIP OLMADIGI ICIN DOCUMENTLERDEN ORNEKLERE BAKILMALIDIR. */}

    <Container maxWidth="md">
    <Typography variant="h1 " component="h1" align ="center" mt={4} color="secondary">
      Material  UI Typography
    </Typography>
    <Typography variant="body1" align ="center" mt={5} color="error" sx={{background:"lightgreen", fontSize:"1.1rem"}}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, saepe! Quaerat quibusdam magnam maiores ipsam adipisci atque voluptas quidem impedit dolores deleniti? Alias dolor modi, assumenda beatae aspernatur corporis. Voluptates!
    </Typography>

    <Typography variant="button" sx={{display:"inline-block", marginTop:"2rem"}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti enim perferendis velit ipsam atque, et adipisci ipsa voluptas laudantium recusandae obcaecati iste vel placeat expedita qui incidunt sequi, minus tempora necessitatibus repudiandae unde eius exercitationem.
    </Typography>
    </Container>

    <Container>
    <Box sx={{display:"flex", 
    flexDirection:"column",
    gap:".5rem" ,alignItems:"center",
    }}> 
      <Button variant="text">Hello Button</Button>
      <Button variant="contained" endIcon={<SendIcon />}  color="error" startIcon={<DeleteIcon />}>Delete Icon </Button>
      <Button variant="outlined" endIcon={<SendIcon />}>Outlined</Button>
    </Box>
    </Container>

  </div>;
};

export default TypoButtons;
