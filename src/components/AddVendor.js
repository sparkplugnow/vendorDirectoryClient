import React, {Component} from 'react';
import './css/style.css';

class AddVendor extends Component{
     createVendor(event){
            event.preventDefault();
            const Vendor = {
                name: this.name.value,
                desc: this.desc.value,
                price: this.price.value
            }
            
        }
    render(){
        return(
            <form ref={(input) => this.itemForm =input} className="fish-edit" onSubmit={(e)=> this.createVendor(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Vendor Name"/>
                <input ref={(input) => this.desc = input} type="text" placeholder="Vendor Description"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Vendor's Price"/>
                <button type="submit"> +Add Vendor</button>
            </form>
        )
    }
}

export default AddVendor;