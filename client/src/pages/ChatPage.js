import io from "socket.io-client";
import Chat from "../components/Chat";
import { useState } from "react";
import { useParams } from "react-router-dom";


const socket = io.connect("http://localhost:3001");


export default function ChatPage () {

    
    let {room} = useParams();
    
    const [username] = useState("Nut");
    const [showChatTab, setShowChatTab] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        const messageJoined = {
            room: room,
            author: username,
            message: `${username} มาแล้วนะทุกคน ^^`,
            time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
        socket.emit("already_joined", messageJoined);
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
                <Chat socket={socket} username={username} room={room} />
            )}
        </div>
    )
}