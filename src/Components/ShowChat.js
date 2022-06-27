import Axios from "axios"
import {useEffect, useState} from 'react';
import {Chat} from "./Chat";

export const ShowChat = (props) =>{
    const [showBox, setShowBox] = useState(false)
    const [id, setId] = useState(0)


    function handleClick() {
        console.log(id)
        setShowBox(!showBox)
    }

    return(
        <div>

            {showBox?<div><Chat userId={id}/></div>:
                <div>
                    UserId:<input onChange={(e) => {setId(parseInt(e.target.value))}}></input>
                    <button onClick={handleClick}>Show Chat</button></div>}
        </div>

    )
}