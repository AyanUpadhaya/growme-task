import React,{useState} from 'react';
import Checkbox from '@mui/material/Checkbox' ;
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { DepartmentsType } from '../FakeDB/fakedb.ts';
interface DepartmentProps {
    department: DepartmentsType;
}

const Department: React.FC<DepartmentProps> = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const { department, sub_departments } = props.department;
    const [subDepartMents,setSubDepartMents] = useState<Array<object>>(sub_departments)
    const handlechange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,checked} = event.target;
    }
    return (
        <>
            <ListItemButton>
                <Checkbox name={department}/>
                <ListItemText sx={{color:'text.primary'}} primary={department} />
                {open ? <ExpandLess sx={{color:'text.primary'}} onClick={handleClick} /> : <ExpandMore sx={{color:'text.primary'}} onClick={handleClick} />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subDepartMents.map((sb: object, id: number) => {
                        return (
                            <ListItemButton key={id} sx={{ pl: 4 }}>
                                <Checkbox name={sb?.name} onChange={handlechange}/>
                                <ListItemText primary={sb?.name} sx={{color:'text.primary'}} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>

        </>
    );
};

export default Department;