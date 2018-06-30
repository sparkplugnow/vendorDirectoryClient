import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Info from './components/info';
import VendorItem from './components/vendor/VendorItem';
import LoadVendors from './components/vendor/loadVendors';
import './App.css';
import sampleVendors from './sample-fishes'
import AuthService from './components/helper/auth';
import withAuth from './components/config/constants';
const Auth = new AuthService();

class App extends Component {
  constructor(){
    super();

         
  this.loadVendors = this.loadVendors.bind(this);
  //getInintialState
    this.state = {
      vendors: {}
    };
  }

  addVendor(vendor){
    //update state
    const vendors = {...this.state.vendors}

    //Add Timestamp
    const timestamp = Date.now();
    vendors[`vendor-${timestamp}`] = vendor;

    //setstate
    this.setState({vendors});
  }

  loadVendors(){
    //setState
    this.setState({
      vendors: sampleVendors
    })
  }

  


  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Search/>
        <LoadVendors loadVendors={this.loadVendors} />
        <ul>
          {
            Object
            .keys(this.state.vendors)
            .map(key => <VendorItem key={key} details={this.state.vendors[key]} />)
          }
        </ul>
        <br/>
      </div>
    );
  }
}

export default App;
