import io from "socket.io-client";
import Chat from "../components/Chat";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const socket = io.connect("http://localhost:3001");


export default function ChatPage () {

    
    let {_id} = useParams();
    const [username] = useState("Nut");
    const [showChatTab, setShowChatTab] = useState(false);
    const [topic, setTopic] = useState([]);
    

    useEffect(() => {
        axios.get(`http://localhost:3001/api/topic/${_id}`)
          .then(response => {
            setTopic(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const joinRoom = () => {
        if (username !== "" && topic.room !== "") {
        socket.emit("join_room", topic.room);
        setShowChatTab(true) ;
        }
    };

    return(
        <div className="Chatpage">
            
            {!showChatTab ? (
                <div>
                    <h1>ChatPage</h1>
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
                
            ):(
                <Chat socket={socket} username={username} room={topic.room} id={topic._id}/>
            )}
        </div>
    )
}