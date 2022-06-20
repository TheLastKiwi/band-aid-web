import React, {Component} from 'react'
import Axios from "axios"
export class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            username:"",
            password:""
        }
    }
    render(){
        return(
                <div>
                    Register
                    <br/>
                    First Name: <input type = "text" onChange = {(e) => this.setState({fName:e.target.value})}></input>
                    <br/>
                    Last Name: <input type = "text" onChange = {(e) => this.setState({lName:e.target.value})}></input>
                    <br/>
                    Email: <input type = "email" onChange = {(e) => this.setState({email:e.target.value})}></input>
                    <br/>
                    Password: <input type = "password" onChange = {(e) =>{this.setState({password:e.target.value})}}></input>
                    <br/>
                    <label>Location</label><input name={"location"}></input><br></br>
                    <br/>
                    Invite Code(Optional): <input type = "text" onChange = {(e) => this.setState({inviteCode:e.target.value})}></input>
                    <br/>
                    Band Id(Optional): <input type = "text" onChange = {(e) => this.setState({bandId:e.target.value})}></input>
                    <br/>
                    <button onClick = {this.reg}>Register</button>
                    <br/>
                    Already registered? <a href = "/login">Click here to log in </a>
                </div>
        );
    }
    reg = () =>{
        let data = {
            email:this.state.email,
            password:this.state.password,
            first_name:this.state.fName,
            last_name:this.state.lName,
            invite_code:this.state.inviteCode,
            band_id:this.state.bandId
        }
        let headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type':"application/json"
        }

        console.log(data);
        Axios.post("http://localhost:8000/register",
            data,
            {
                ...headers
            }
        ).then(response => {
            //notify user of successful registartion
            alert("Registration Success")
            window.location.replace("/login");
        }).catch(reason => {
            //send message saying server is down
            console.log(reason);
        })

    }
}
export default Register;