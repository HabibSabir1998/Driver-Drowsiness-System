import React, { Component } from "react";
import UserLogin from "./UserLogin"

export default class UserSignup extends Component {
    constructor(props){
        super(props);

        this.state={
            deviceid:"",
            email:"",
            phoneno:"",
            password:"",
            reEnterPassword:"",
            Register: null

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

        handleSubmit() {
            const {password,reEnterPassword,deviceid} = this.state
        
            // e.preventDefault()
            if(password !== reEnterPassword) {
                alert("Both Password are not same")
            }
            else {
                this.setState({
                    Register:"true",
                    id:deviceid
                })
                this.props.history.push("/sign-in");
            }
        }
       
        componentDidMount(){
            console.log("dusri state",this.state)
        }

        
    renderForm(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Registration</h3>

                <div className="form-group">
                    <label>Device ID</label>
                    <input type="text" className="form-control" value={"vv-0213"} disabled />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.email} onChange={e=>this.setState({email:e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Phone No</label>
                    <input type="text" className="form-control" placeholder="Phone No" value={this.phoneno} onChange={e=>this.setState({phoneno:e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.password} onChange={e=>this.setState({password:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Verify Password</label>
                    <input type="password" className="form-control" placeholder="Re-Enter password" value={this.reEnterPassword} onChange={e=>this.setState({reEnterPassword:e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary btn-block button">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">Sign In?</a>
                </p>
                </div>
                </div>
            </form>
        )
    }
    render() {
        const {Register,id,password} = this.state
        return (
            <div>
            
            { !Register && this.renderForm() }
            { Register && <UserLogin  id={id} password={password}  />}
            <p>{Register}</p>
            </div>
        );
    }
}