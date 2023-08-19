import { Button } from '@mui/material';
import React from 'react';


interface MyButtonProps{
    text: string;
    onClick?: () => void;
}

const MyButton:React.FC<MyButtonProps> = (props) => {
    return (
        <>
            <Button onClick={props.onClick} variant='contained'>{props.text}</Button>
        </>
    );
};

export default MyButton;