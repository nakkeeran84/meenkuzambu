import React,{ PropTypes } from 'react';

export default function Product(props) {
  return (<div className="col-md-3 pro-1">
      <div className="col-m">
      <a href="#" data-toggle="modal" data-target="#myModal17" className="offer-img">
          <img src={`../product_images/${props.product.image}`} className="img-responsive" alt=""/>
        </a>
        <div className="mid-1">
          <div className="women">
            <h6><a href="single.html">{props.product.name}</a>({props.product.quantity})</h6>
          </div>
          <div className="mid-2">
            <p ><label>Rs {props.product.oldPrice}</label><em className="item_price">Rs {props.product.newPrice}</em></p>
              <div className="block">
              <div className="starbox small ghosting"> </div>
            </div>
            <div className="clearfix"></div>
          </div>
            <div className="add add-2">
             <button className="btn btn-danger my-cart-btn my-cart-b" data-id="1" data-name="product 1" data-summary="summary 1" data-price="6.00" data-quantity="1" data-image="images/of16.png">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
);
}

Product.propTypes = {
  product: PropTypes.object
}
