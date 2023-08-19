import React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import MainForm from '../components/MainForm';
const HomePageView:React.FC =()=>{
    return(
        <Container maxWidth="md">
            <Typography variant="h3" component="h3" sx={{textAlign:'center',py:3}}>
            Form Submission
            </Typography>
            <MainForm />
        </Container>
    )
}

export default HomePageView;