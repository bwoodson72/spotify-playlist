'use client'

import {AppBar, Toolbar, Button, Typography} from '@mui/material';
import {useContext} from 'react';
import {LoginContext} from "@/componets/providers/loginContextProvider";

export function AppToolBar() {
    const {isLoggedIn, login, logout} = useContext(LoginContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Button color="inherit"
                onClick={isLoggedIn ? logout : login}

                >{isLoggedIn ? 'Logout' : 'Login'}</Button>
            </Toolbar>
        </AppBar>
    )
}