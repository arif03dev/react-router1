import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>Hello buddys how are you</h2>
            <p>amay kisu taka dahr dibi re: {friends.length}</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    );
};

export default Friends;