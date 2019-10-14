import React, {Component} from 'react';
import SHOP_DATA from "./shop-page.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


// TODO: merge this component with the shop page

class ShopPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}


export default ShopPage;