import React,{useState} from 'react';
import {Button,FormControl} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const MainForm: React.FC = () => {
    interface User{
        username: string;
        phone: string;
        email: string;
    }
    const [user,setUser] = useState<User>({username:'',phone:'',email:''})
    function handleSubmit(e:React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        const {username,phone,email} = user;
        if(username!='' && phone!=='' && email!== ''){
            localStorage.setItem('user',JSON.stringify(user));
        }else{
            alert('Please fill all the fields');
        }
    }
    
    
    return (
        <form style={{padding:'20px 0'}} onSubmit={handleSubmit}>
            <FormControl sx={{width:'100%'}}>
                
                <TextField

                    variant='outlined'
                    label="Username"
                    fullWidth
                    defaultValue = {user.username}
                    onChange={(e)=>setUser({...user, username: e.target.value})}
                />
                
                <TextField
                    label="Phone"
                    type='text'
                    fullWidth
                    defaultValue = {user.phone}
                    onChange={(e)=>setUser({...user, phone: e.target.value})}
                    sx={{marginBottom:3,marginTop:3}}
                />
           
                <TextField
            
                    label="Email"
                    type='email'
                    fullWidth
                    defaultValue = {user.email}
                    onChange={(e)=>setUser({...user, email: e.target.value})}
                />
                <Box my={2}>
                    <Button type="submit" variant='contained'>Submit</Button>
                    <Button type="reset" variant='contained' sx={{ mx: 2 }} >Reset</Button>
                </Box>
        

            </FormControl>
            
         
        </form>
    );
};

export default MainForm;