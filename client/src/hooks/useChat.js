import { useEffect, useState } from 'react';
import { socket } from '../context/context'

export const useChat = () => {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        socket.on('connect', () => {
            console.log("Connected to server!");

            socket.on("newRoomUser", (res) => {
                console.log(`User ${res.username} joined!`)
            })
        })
    }, []);

    const joinRoom = (username, room) => {
        socket.emit("clientJoin", {
            username,
            room
        });
    }

    return {
        joinRoom,
        logged,
        setLogged
    }
}
