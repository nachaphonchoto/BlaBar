import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import ScrollToBottom from "../ScrollToBottom ";

import { useEffect, useState } from "react";
import axios from 'axios';

export default function Chat({ socket, username, room, id, image }) {
  
const [currentMessage, setCurrentMessage] = useState("");
const [messageList, setMessageList] = useState([]);

const sendMessage = async () => {
  if (currentMessage !== "") {
    const messageData = {
      room: room,
      sender: username,
      message: currentMessage,
      time: new Date(Date.now()),
      imageURL: image
    };
 

    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");

    axios.post(`http://localhost:3001/api/chat/${room}`, messageData)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
    
  }
};

useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageList((list) => [...list, data]);
    console.log("receive_message : " + data);
  });

  console.log(socket)
}, [socket]);

useEffect(() => {
  axios.get(`http://localhost:3001/api/chat/${id}`)
    .then(response => {
      setMessageList(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
}, [id]);


  return (
    
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        {/* <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          {room}
        </Typography> */}
      
      <ScrollToBottom>
        <List sx={{ mb: 2 }}>
          {messageList.map((messageContent) => (
            <React.Fragment >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={messageContent.imageURL}  />
                </ListItemAvatar>
                <ListItemText primary={messageContent.sender} secondary={messageContent.message} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </ScrollToBottom>
        
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Paper 
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="ข้อความ..."
              value={currentMessage}
              onChange={(event) => {
                  setCurrentMessage(event.target.value);
              } }
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  sendMessage();
                }
              }}
            />
              <Divider sx={{ height: 28, m: 0.5 }}  orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} onClick={sendMessage} aria-label="directions">
                <SendIcon />
              </IconButton>
            </Paper>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

