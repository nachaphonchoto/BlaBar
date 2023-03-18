import io from "socket.io-client";
import Chat from "../components/Chat";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Detail from "../components/Detail";
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';


const socket = io.connect("http://localhost:3001");


export default function ChatPage () {

    
    let {_id} = useParams();
    const [showChatTab, setShowChatTab] = useState(false);
    const [topic, setTopic] = useState([]);

    
    

    useEffect(() => {
        axios.get(`http://localhost:3001/api/topic/${_id}`)
          .then(response => {
            setTopic(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [_id]);

    const joinRoom = () => {
        if ( _id !== "") {
        socket.emit("join_room", _id);
        setShowChatTab(true) ;
        }
    };

    return(
        <div className="Chatpage">
            
            {!showChatTab ? (
                <div>
                    <Box sx={{ p: 5}}>
                        <Paper elevation={1}>
                            <Detail data={topic}/>
                            <Box sx={{ p: 5}}>
                                <Tooltip title="เปิดแชท" placement="top" arrow>
                                    <Button variant="outlined" onClick={joinRoom} startIcon={<ChatIcon />} >
                                        แชท
                                    </Button>  
                                </Tooltip>
                            </Box>
                            
                        </Paper>
                    </Box>
                </div>
                
            ):(
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8} >
                        <Box sx={{ p: 5}}>
                        <Paper elevation={1}>
                            <Detail data={topic}/>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} style={{maxHeight: '100vh', overflow: 'auto'}}>
                        <Chat socket={socket} id={_id} />
                    </Grid>
                </Grid>
            )}
        </div>
    )
}