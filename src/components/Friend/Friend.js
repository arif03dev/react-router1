import React from 'react';

const Friend = ({friend}) => {
    const {name, username, id} = friend;
    return (
        <div>
            <h1>{name}</h1>
            <button>{username} id:{id}</button>
        </div>
    );
};

export default Friend;