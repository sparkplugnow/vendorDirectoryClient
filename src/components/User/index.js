import React, { Component } from 'react';
import AuthService from '../helper/auth';
export default class Page extends Component {
  state={
    signup: true,
    signin: false,
    Auth: {},
    Reg: {}
  }

  toggleSignUp(e){
    this.setState({
      signup: true,
      signin: false
    })
  }

  toggleSignIn(e){
    this.setState({
      signup: false,
      signin: true
    })
  }


  Auth = new AuthService ()

  Login(e){
    e.preventDefault();
    const auth = {
      email: this.Email.value,
      password: this.Password.value
    }
    const Auth = {...this.state.Auth}
    Object.assign(Auth, auth)
    this.setState({
      Auth
    })  
    this.Auth.login(this.state.Auth.email,this.state.Auth.password)
    .then(res=>{
      this.props.history.replace("/");
    })
    .catch(err =>{
      alert(err)
    })
}

  register(e){
    const reg = {
      email: this.email.value,
      name: this.name.value,
      telephone: this.telephone.value,
      password: this.password.value
    }
    const Reg = {...this.state.Reg}
    const stamp = Date.now();
    Reg[`Reg-${stamp}`] = reg;
    this.setState({
      Reg
    })
  }

  componentDidMount(){
    if(this.Auth.loggedIn())
      this.props.history.replace('/')
  }

  render() {
      
    const {signin,signup} = this.state;

    const Login = () => (
      <div className="">
          <form onSubmit={(e)=> this.Login(e)} className="measure center">
          <fieldset id="sign_up" className="b--black-80 ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset b--black-60 ba bg-transparent  w-100" type="email" name="email-address"  id="email-address" ref={(input) => this.Email = input}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset b--black-60 ba bg-transparent  w-100" type="password" name="password"  id="password" ref={(input)=> this.Password = input}/>
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset b--black-60 ba  bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db" onClick={(e)=>this.toggleSignUp(e)}>Sign Up</a>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </form>
        <hr className="mv3"/>
        <div className="inline-block-ns white">
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-red grow pointer f6 dib mr2" value="Sign In with Google" />
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-blue grow pointer f6 dib mr2" value="Sign In with Microsoft" />
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-dark-blue grow pointer f6 dib mr2" value="Sign In with Facebook" />
        </div>
      </div>
    );
    
    const Register = () => (
      <div>
        <form onSubmit={(e)=> this.register(e)} className="measure center">
            <fieldset id="sign_up" className="b--black-80 ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="inline-flex-ns">
              <div className="mt3 mr2">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input className="pa2 input-reset b--black-60 ba bg-transparent  w-100" type="text" name="name"  id="name" ref={(input)=> this.name = input} />
              </div>
              <div className="mv3 mr2">
                  <label className="db fw6 lh-copy f6" htmlFor="Telephone">Telephone</label>
                  <input className="b pa2 input-reset b--black-60 ba bg-transparent  w-100" type="text" name="telephone"  id="telephone" ref={(input)=> this.telephone = input} />
              </div>
            </div>
            <div className="inline-flex-ns">
              <div className="mt3 mr2">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset b--black-60 ba bg-transparent  w-100" type="email" name="email-address"  id="email-address" ref={(input)=> this.email = input} />
              </div>
              <div className="mv3 mr2">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset b--black-60 ba bg-transparent  w-100" type="password" name="password"  id="password" ref={(input)=> this.password = input} />
              </div>
            </div>
            </fieldset>
            <div className="">
            <input className="b ph3 pv2 input-reset b--black-60 ba  bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
            </div>
            <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db" onClick={(e)=>this.toggleSignIn(e)}>Sign In</a>
            </div>
        </form>
        <hr className="mv3"/>
        <div className="inline-block-ns white">
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-red grow pointer f6 dib mr2" value="Sign In with Google" />
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-blue grow pointer f6 dib mr2" value="Sign In with Microsoft" />
          <input className="b ph3 pv2 mv2 white b--transparent ba  bg-dark-blue grow pointer f6 dib mr2" value="Sign In with Facebook" />
        </div>
      </div>
    );
    
    
    
    return (
      <div>
      <div className="user-back"></div>
        <div className="login-form-positon ">
        <div className="tc">
          <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib ba b--black-60-05 pa2" alt="company logo" title="logo of the company" style={{paddingBotom: '0px'}}/>
          <h1 className="f3 mt1 mb4">Vendor</h1>
        </div>
        <div className=" pa4 black-80 tc">
          {signin === true && <Login />}
          {signup === true && <Register />}
        </div>
      </div>
      </div>
    );
  }
}
