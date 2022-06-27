import Axios from "axios"
import {useEffect, useState} from 'react';
export const Chat = (props) =>{
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const [socket, setSocket] = useState()

    useEffect(() => {
        console.log("loading id =" + props.userId)

        //Initiate a websocket connection
        const socket = new WebSocket("ws://localhost:8000/ws");
        socket.onmessage = (msg) =>{
            console.log("Received message")
            const data = JSON.parse(msg.data);
            console.log(data)
            console.log("data[\"message\"]")
            console.log(data["message"])
            console.log("data[\"sender_user_id\"]")
            console.log(data["sender_user_id"])
            setMessages(messages => [...messages, data]);
        }
        //wait until the connection is open
        socket.onopen = () => {
            console.log("Connected to websocket");
            socket.send(localStorage.getItem("jwt"));
            setSocket(socket);
        }

        getMessages();
    },[])

    function sendMessage(message) {
        var data = {
            message: message,
            recipient_user_id: props.userId
        }
        console.log(data)
        socket.send(JSON.stringify(data));
    }

    const handleSendMessage = () => {
        sendMessage(message);
        setMessage("");
    };

    function getMessages() {
        Axios.get(`http://localhost:8000/messages/${props.userId}`, {headers: {Authorization: "Bearer " + localStorage.getItem("jwt")}})
            .then(response =>{
            setMessages(response.data)
        }
        ).catch(reason => {
            alert(reason.response)
        })
    }
    const chatStyle = {
        "width": "350px",
        "height": "430px",
    }
    function returnAlignment(sender, target,msg) {
        if (sender === target) {
            return {textAlign: "left"}
        } else {
            return {textAlign: "right"}
        }
    }
    return(
        <div style={chatStyle}>
            <h1 className="room-name">User: {props.userId}</h1>
            <div>
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i} style={returnAlignment(message["sender_user_id"],props.userId,message.message)}
                            // className={`message-item ${
                            //     message.sender_user_id===props.userId ? "received-message":"my-message"
                            // }`}
                        >
                            {message.message}
                        </li>
                    ))}
                </ol>
            </div>
            <input type = "text" value={message} onChange = {(e) => setMessage(e.target.value)}></input>
            <button onClick={handleSendMessage}>
                Send
            </button>
        </div>
    );

}