import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { DepartmentsType, SubDepartments } from '../FakeDB/fakedb.ts';

//for department props type
interface DepartmentProps {
    department: DepartmentsType;
}


const Department: React.FC<DepartmentProps> = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const { department, sub_departments } = props.department;
    //state for managing sub departments
    const [subDepartMents, setSubDepartMents] = useState<SubDepartments[]>(sub_departments.map(subDept => ({ ...subDept, isChecked: false })));
    //handleChange event will cuase check or unchecked
    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        if (name === department) {
            //if name is the department then check all sub departments
            const tempDepts = subDepartMents.map(subDept => { return { ...subDept, isChecked: checked } })
            setSubDepartMents(tempDepts);
        } else {
            //else check current department
            const tempDepts = subDepartMents.map(subDept => {
                return subDept.name === name ? { ...subDept, isChecked: checked } : subDept
            })
            setSubDepartMents(tempDepts)
        }
    }
    return (
        <React.Fragment>
            <ListItemButton>
                {open ? <ExpandLess sx={{ color: 'text.primary' }} onClick={handleClick} /> : <ExpandMore sx={{ color: 'text.primary' }} onClick={handleClick} />}
                <Checkbox name={department}
                    onChange={handlechange}
                    checked={subDepartMents.filter(subDept => subDept?.isChecked !== true).length < 1}
                />
                <ListItemText sx={{ color: 'text.primary' }} primary={department} />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subDepartMents.map((subDept: SubDepartments, id: number) => {
            
                        return (
                            <ListItemButton key={id} sx={{ pl: 4 }}>
                                <Checkbox name={subDept.name} onChange={handlechange} checked={subDept.isChecked || false} />
                                <ListItemText primary={subDept.name} sx={{ color: 'text.primary' }} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>

        </React.Fragment>
    );
};

export default Department;