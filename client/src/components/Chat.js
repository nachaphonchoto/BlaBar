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

export default function Chat({ socket, username, room }) {
  
const [currentMessage, setCurrentMessage] = useState("");
const [messageList, setMessageList] = useState([]);

const sendMessage = async () => {
  if (currentMessage !== "") {
    const messageData = {
      room: room,
      author: username,
      message: currentMessage,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
  }
};

useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageList((list) => [...list, data]);
  });
}, [socket]);


  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          {room}
        </Typography>
        
      <ScrollToBottom>
        <List sx={{ mb: 2 }}>
          {messageList.map((messageContent) => (
            <React.Fragment >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture"  />
                </ListItemAvatar>
                <ListItemText primary={messageContent.author} secondary={messageContent.message} />
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
              placeholder="Hi..."
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
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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

