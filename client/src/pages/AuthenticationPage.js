import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function AuthenticationPage() {

    const [login, setLogin] = useState(true);

    const showLogin = ()=> setLogin(true);
    const showRegister = ()=> setLogin(false)
        
      

  return (
    login ? 
    <div>
        <LoginPage/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Link onClick={showRegister} style={{cursor:'pointer'}} variant="body2">
                สมัครสมาชิก
            </Link>
        </Box>
    </div> 
    :
    <div>
        <RegisterPage/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Link onClick={showLogin} style={{cursor:'pointer'}} variant="body2">
                เข้าสู่ระบบ
            </Link>
        </Box>
    </div>
  );
}