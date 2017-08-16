import React,{ PropTypes } from 'react';
import Product from './Product';
export default function Products(props) {

  return (
    	<div className="product">
    		<div className="container">
    			<div className="spec ">
    				<h3>Special Offers</h3>
    				<div className="ser-t">
    					<b></b>
    					<span><i></i></span>
    					<b className="line"></b>
    				</div>
    			</div>
    				<div className=" con-w3l">
              {props.productlist.map(function(productDetail) {
                return <Product key={productDetail.id} product={productDetail}/>;
              })}
    							<div className="clearfix"></div>
    				</div>
    		</div>
    	</div>

  );
}
Products.propTypes = {
  productlist: PropTypes.array
}
