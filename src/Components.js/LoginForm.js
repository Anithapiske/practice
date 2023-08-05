import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         email:'',
         password:''
      }
    }
    usernameHandler=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    emailHandler=(event) =>{
        this.setState({
            email:event.target.value
        })
    }
    passwordHandler=(e) =>{
        this.setState({
            password:e.target.value
        })
    }
    preventHandler = (event)=>{
        alert(this.state.username+this.state.email +this.state.password);
        event.preventDefault();
    } 
    handler = ()=>{
        alert(this.state.username+this.state.email +this.state.password);
    }
  render() {
    const {username,email,password} = this.state;
    return (
      <div className="container">
       <form className="form" onSubmit={this.preventHandler}>
        <label htmlFor="userName">username</label>
        <input type="text" id="userName" value={username}  onChange={this.usernameHandler}/>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" value={email}  onChange={this.emailHandler}/>
        <label htmlFor='password'>password</label>
        <input type='password' id='password' value={password}  onChange={this.passwordHandler}/>
        
            <butoon type="submit" onClick={this.handler} >submit</butoon>
        
       </form>
      </div>
    )
  }
}

export default LoginForm
