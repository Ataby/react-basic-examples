import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from "../data";
import Grid from "@mui/material/Grid"


export default function CardGrid () {

    //RETURN ICINDE BIR STATEMENT YAZMAK ICIN SUSLU KULLANMAYI UNUTMA.
  return (
    <>
    <Typography variant='h4' alignContent="center"> CARD and GRID STYLE</Typography>
    <Grid container spacing={4} alignItems="center" justifyContent="center">
    {data.map((card)=>{
        const {id,text,name,img}=card;
        return (
             
                <Grid item xs={12} sm={6} md={4}>
                    <Card key={id} >
        <CardMedia
            sx={{ height: 440 }}
            image={img}
            title="green iguana" 
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {text}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
                    </Card>
                </Grid>
             
        );
    })}

    
    </Grid>
    </>
  );
}