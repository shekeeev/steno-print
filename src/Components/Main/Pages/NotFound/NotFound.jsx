import React, { useEffect } from 'react';
import n from './NotFound.module.css'
import not from '../../../../Assets/Images/404Error.jpg'
import { Link, useNavigate, } from 'react-router-dom';
const NotFound = () => {

    const navigate = useNavigate()


    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 3000)
    }, [navigate])

    return (
        <div>
            <img src={not} alt="" />
            <Link to={'/home'}>To home</Link>
        </div>
    );
};

export default NotFound;