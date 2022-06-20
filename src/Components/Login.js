import Axios from "axios"
import {useState} from 'react';
import jwt from 'jwt-decode'

export const Login = () =>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

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