import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';
import axios from 'axios';
import { useState } from "react";


const theme = createTheme();


export default function LoginPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }
        
        try {
            axios.post(`http://localhost:3001/api/auth`, data, {
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if ('token' in response.data) {
                    swal("Success",  "success" ,"success", {
                      buttons: false,
                      timer: 2000,
                    })
                    .then(() => {
                      localStorage.setItem('token', response.data.token);
                      window.location.href = "/";
                    });
                  } else {
                    swal("Failed", "An error ", "error");
                  }
            })
            .catch(error => {
                swal("Failed", "An error ", "error");
            });
          
          
        } catch (error) {
          swal("Failed", "An error occurred", "error");
        }
      }
      

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              เข้าสู่ระบบ
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}