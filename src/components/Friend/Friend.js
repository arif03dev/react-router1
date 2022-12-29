import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, username, id } = friend;
    const navigate = useNavigate();
    const friendDetails = () => {
        const path = `friend:${id}`
        navigate(path)
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={friendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;