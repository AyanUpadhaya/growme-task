import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

interface RouteProp {
    children: React.ReactElement
}


const PrivateRoute: React.FC<RouteProp> = ({ children }) => {

    const [user, setUser] = useState<object>({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const loggedUser = localStorage.getItem("user") 
        if(loggedUser){
            setUser(JSON.parse(loggedUser))
            setLoading(false)
        }else{
            Swal.fire('You need to login first')
            navigate('/')
        }
        
    }, [navigate])

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children;
    }
}

export default PrivateRoute;