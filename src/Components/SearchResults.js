import {useState} from 'react';


export const SearchResults = (props) =>{
    return(
        <div>
            <ul>{props.results.map((res)=>
            <li>{res}</li>)}</ul>
        </div>
    )
}