import Axios from "axios"
import {useEffect, useState} from 'react';
import jwt from 'jwt-decode'

export const Profile = (jwt) =>{
    const [data,setData] = useState()
    useEffect(() =>{
        const token = localStorage.getItem("jwt");
        if(token == null){
            throw new Error("You are not who you say you are");
        }
        const jwtInfo = jwt.decode(token)
        data = {}
        Axios.post("http://localhost:8000/login",
            jwtInfo
        ).then(response => {
            token = response.data;
            console.log(token);
            localStorage.setItem("jwt",token);
            window.location.replace("/");
        }).catch(reason => {
            //send message saying server is down
            alert(reason.response);
        })
    });
    const login = () =>{
        let data= {
            email:email,
            password:password
        }
        let token = "";
        Axios.post("http://localhost:8000/login",
            data
        ).then(response => {
            token = response.data;
            console.log(token);
            localStorage.setItem("jwt",token);
            window.location.replace("/");
        }).catch(reason => {
            //send message saying server is down
            alert(reason.response);
        })
    }
    return(
        <div>
            Log In<br/>
            Email: <input type = "email" onChange = {(e) => setEmail(e.target.value)}></input>
            <br/>
            Password: <input type = "password" onChange = {(e) => setPassword(e.target.value)}></input>
            <br/>
            <button onClick = {login}>Login</button>
            <br/>
            Not registered? <a href = "/register">Click here to register </a>
        </div>
    )
}