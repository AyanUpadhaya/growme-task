import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography, Container } from "@mui/material";
import Loader from '../components/Loader';
const DataGridView = () => {
    //posts interface
    interface Posts {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState<Posts[]>([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data);
        }
        fetchData();
    }, [])
    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'USERID', width: 90 },
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            editable: true,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
            editable: true,
        },
        {
            field: 'body',
            headerName: 'Body',
            type: 'string',
            width: 800,
            editable: true,
        }
    ];

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h3" component="h3" sx={{ textAlign: 'center', py: 3 }}>
                    Data Grid
                </Typography>
                <Box sx={{
                    height: 400, width: '100%', borderColor: 'primary.light',
                    '& .MuiDataGrid-cell': {
                        color: 'primary.contrastText',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: 'primary.light',
                    },
                    '& .MuiCheckbox-root': {
                        color: 'primary.light',
                        borderColor: 'primary.light'
                    },
                    '& .MuiTablePagination-root': {
                        color: 'primary.contrastText',
                    }
                }}>
                    {
                        posts.length > 0 ?
                            <DataGrid
                                rows={posts}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                            :
                            <Loader></Loader>
                    }
                </Box>
            </Container>

        </React.Fragment>
    );
};

export default DataGridView;