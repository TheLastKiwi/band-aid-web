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
        const userId = jwtInfo.userId
        Axios.get(`http://localhost:8000/user/${userId}`).then(response =>{
            setData(response.data)
        }
        ).catch(reason =>{
            alert(reason.response)
        })
    });

    return(
        <div>
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
            <h2>{data.location}</h2>
        </div>
    )
}