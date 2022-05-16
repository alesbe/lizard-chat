import { useEffect, useState } from 'react';
import { socket } from '../context/context'

export const useChat = () => {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        socket.on('connect', () => {
            console.log("Connecting to server...");
        })
    }, []);

    const joinRoom = (name, room) => {
        socket.emit("clientJoin", {
            name,
            room
        });
    }

    return {
        joinRoom,
        logged,
        setLogged
    }
}
