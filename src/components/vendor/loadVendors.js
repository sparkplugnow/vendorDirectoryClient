import React, {Component} from 'react';

class LoadVendors extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.loadVendors}>Load Vendors</button>
            </div>
            
        )
    }
}

export default LoadVendors;