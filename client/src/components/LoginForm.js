import React, { useState } from 'react'
import './LoginForm.css';

export const LoginForm = ({ setLogged, joinRoom }) => {
    const [form, setForm] = useState({
        username: '',
        room: ''
    })

    const handleSubmit = (ev) => {
        ev.preventDefault();

        joinRoom(form.username, form.room);
    }

    const handleChange = (ev) => {
        setForm((prevProps) => ({
            ...prevProps,
            [ev.target.name]: ev.target.value
        }))
    }

    return (
    <div className='wrapper'>
        <form onSubmit={ handleSubmit }>
            <input onChange={ handleChange } value={ form.username } name='username' placeholder='Username' maxLength="20" type="text" required></input>

            <input onChange={ handleChange } value={ form.room } name='room' placeholder='Room' maxLength="20" type="text" required></input>

            <button type='submit'>Join</button>
        </form>
    </div>
    )
}
