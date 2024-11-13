import React, { useState } from 'react';
import { Box,Typography,TextField,Button,Container } from '@mui/material';
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple check for demonstration purposes
        if (username === 'user' && password === '123') {
            onLogin();
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Container maxWidth="xs" sx={{display:'flex'}}>
        <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="300px"
            sx={{
                border:'1px solid',
                padding:'13px',
                borderRadius:'10px',
                backgroundColor:'background.paper',
                marginTop:'90px'
            }}            
        >
            <Typography variant="p" component="h2" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>
        </Box>
    </Container>
    );
};

export default Login;

