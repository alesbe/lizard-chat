import React, { useEffect } from 'react';
import {SocketContext, socket} from '../context/context'

export const useChat = () => {
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
        joinRoom
    }
}
