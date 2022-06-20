import React,{useState} from 'react';
import {SearchResults} from "./SearchResults";
import Axios from "axios";
export const Search = () =>{
    const [location, setLocation] = useState();
    const [type, setType] = useState();
    const [distance, setDistance] = useState();
    const [roles, setRoles] = useState();

    const find = () => {
        let token = "";

        Axios.get("http://localhost:8000/search_users/?location=" +
            location + "&type="+type + "&distance=" + distance + "&roles=" + roles

        ).then(response => {
            token = response.data;
            console.log(token);
            localStorage.setItem("jwt", token);
            window.location.replace("/");
        }).catch(reason => {
            //send message saying server is down
            alert(reason.response);
        })
    }
    return(
        <div>
            <input type={"text"} onChange={(e) => setLocation(e.target.value)}/>
            <input type={"text"} onChange={(e) => setDistance(e.target.value)}/>
            <select name={"SearchType"} onChange={(e)=>setType(e.target.value)}>
                <option value="Band">Band</option>
                <option value="Member">Member</option>
            </select>
            <button onClick={find}>Search</button>
            <SearchResults results={[5,6,7,8,9]}/>
        </div>
    )

}