import React from 'react';
import { departements, DepartmentsType } from '../FakeDB/fakedb.ts';
import Department from './Department.tsx';
import { Typography, Container } from "@mui/material";
import List from '@mui/material/List';

const DepartmentsList: React.FC = () => {
    return (
        <React.Fragment>
            <Container sx={{marginBottom:5}}>
                <Typography variant="h3" component="h3" sx={{ textAlign: 'center', py: 3 }}>
                    Departments List
                </Typography>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                >                  
                    {departements.map((department: DepartmentsType, idx: number) => <Department key={idx} department={department} />)}
                </List>
            </Container>
        </React.Fragment>
    )
}

export default DepartmentsList; 