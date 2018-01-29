import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { startLogin } from '../actions.js';
import styles from './styles.css';
  
    
class Login extends Component {
  

  render() {
     console.log(this.props)
    return (
    <div className="root">
          
      <TextField
          id="name"
          label="Email"
          className="textField"
          
        />
        
      <TextField
          id="name"
          label="Password"
          className="textField"
        />
    
      <Button raised color="primary" className={styles.button}>
        Login
      </Button>
        </div>
  );

  }
}

const mapStateToProps = state => ({ global: state });

const mapDispatchToProps = (dispatch) => {
  return {
      login: bindActionCreators(startLogin, dispatch)
  };
};


   
export default connect(mapStateToProps, mapDispatchToProps)(Login);