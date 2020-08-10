import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

class UserLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            confirmPassword:"",
            id:""
        }
    
        this.handleLogin=this.handleLogin.bind(this)
    }
    componentDidMount(){
        console.log(this.state)
        // console.log(this.props.data)
    }

    handleLogin(e){
        e.preventDefault();
        const {confirmPassword} = this.state
        
        if(confirmPassword) {
            this.props.history.push("/dashboard");
            
        }
        
            // this.props.history.push("/dashboard")
            // alert("Done")
            // window.location="/dashboard"
        
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} >
                <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>DeviceID</label>
                    <input type="text" className="form-control" placeholder="Device ID" value={this.id} onChange={e=>this.setState({id:e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  value={this.confirmPassword} onChange={e=>this.setState({confirmPassword:e.target.value})}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn button btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/dashboard">password?</a> 
                </p>
                </div>
                </div>
            </form>

            
        );
    }
}

export default UserLogin;