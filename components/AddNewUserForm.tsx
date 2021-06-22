import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button} from '@material-ui/core';

export const AddNewUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const changeHandlerName = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setName(event.target.value as string);
    };

    const changeHandlerEmail = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setEmail(event.target.value as string);
    };
    const changeHandlerRole = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRole(event.target.value as string);
    };

    const addNewUser = async () => {
        try {
            const addNewUser = {
                name,
                email,
                role
            };

            const res = await axios.post(
                `${process.env.RESTURL}/api/addnewuser`,
                addNewUser
            );

            setName('');
            setEmail('');
            setRole('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <React.Fragment>
            <div className="editForm">
                <div>
                    <h3>Add new user</h3>
                </div>
                <div className="formBlock">
                    <TextField
                        onChange={changeHandlerName}
                        margin="normal"
                        name="name"
                        value={name}
                        type="text"
                        label="name"
                    />
                </div>
                <div className="formBlock">
                    <TextField
                        onChange={changeHandlerEmail}
                        margin="normal"
                        name="email"
                        value={email}
                        type="text"
                        label="email"
                    />
                </div>
                <div className="formBlock">
                <TextField
                        onChange={changeHandlerRole}
                        margin="normal"
                        name="role"
                        value={role}
                        type="text"
                        label="role"
                    />
                </div>

                <div className="formBlock">
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={addNewUser}
                    >
                        Add new user
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};
