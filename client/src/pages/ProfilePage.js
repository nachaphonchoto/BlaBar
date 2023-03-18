import axios from 'axios';
import { useState, useEffect } from "react";
import Search from '../components/Search';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function ProfilePage () {

    const [topics, setTopics] = useState();
    const token = localStorage.getItem('token');
    const [user, setUser] = useState(null);

    useEffect(() => { 
        if(!user) {
            axios.get(`http://localhost:3001/api/users`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            });   

        }
    }); 


    useEffect(() => { 
        if(!topics) {
             axios.get(`http://localhost:3001/api/users/topic`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => {
                console.log(response.data);
                setTopics(response.data);
            })
            .catch(error => {
                console.log(error);
            });  
        }
            
    });

    return(
        <div className="HomePage">
            {
                user?
                <Box sx={{ p: 5}}>
                    <Paper elevation={1}>
                        <Box sx={{ p: 2}} >
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Avatar
                                    src={user.avatar}
                                    sx={{ width: 80, height: 80 }}
                                />
                                <div>
                                <h1>{user.name}</h1>   
                                </div>   
                            </Stack>
                        </Box>
                        
                    </Paper>
                </Box>
                :
                <Box sx={{ p: 5}}>
                    <Skeleton variant="rectangular" width={1000} height={100} />
                </Box>
                
            }
            
            
            {topics? <Search  topics={topics} mode={1}/> : 
             <Box sx={{ p: 5}}>
                <Skeleton variant="rectangular" width={210} height={118} />
             </Box>
            }
            
        </div>
    )
}