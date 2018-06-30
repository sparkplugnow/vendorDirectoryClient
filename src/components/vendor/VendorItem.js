import React, {Component} from 'react';
import "../../css/app.css";
import {formatPrice} from '../../helpers';

class VendorItem extends Component {
    render(){
        const {details} = this.props
        return (
            <li>
                <main class="mw6 center">
                     <article>
                        <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
                        <div class="dtc w3">
                            <img src="http://mrmrs.github.io/images/0010.jpg" class="db w-100"/>
                        </div>
                        <div class="dtc v-top pl2">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{details.name}</h1>
                            <h2 class="f6 fw4 mt2 mb0 black-60">{details.desc}</h2>
                            <dl class="mt2 f6">
                            <dt class="clip">Price</dt>
                            <dd class="ml0">{formatPrice(details.price)}</dd>
                            </dl>
                        </div>
                        </a>
                    </article>
                 </main>
            </li>
    
        )
    }
}

export default VendorItem;