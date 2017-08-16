import React from 'react';
export default function Header() {
  return (
    <div className="header">
    		<div className="container">
    			<div className="logo">
    				<h1 ><a href="index.html"><b>T<br/>H<br/>E</b>Meen Kuzambu<span>The Best Fish market</span></a></h1>
    			</div>
    			<div className="head-t">
    				<ul className="card">
    					<li><a href="wishlist.html" ><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</a></li>
    					<li><a href="login.html" ><i className="fa fa-user" aria-hidden="true"></i>Login</a></li>
    					<li><a href="register.html" ><i className="fa fa-arrow-right" aria-hidden="true"></i>Register</a></li>
    					<li><a href="about.html" ><i className="fa fa-file-text-o" aria-hidden="true"></i>Order History</a></li>
    					<li><a href="shipping.html" ><i className="fa fa-ship" aria-hidden="true"></i>Shipping</a></li>
    				</ul>
    			</div>

    			<div className="header-ri">
    				<ul className="social-top">
    					<li><a href="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></a></li>
    					<li><a href="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span></span></a></li>
    					<li><a href="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span></span></a></li>
    					<li><a href="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i><span></span></a></li>
    				</ul>
    			</div>

    				</div>
    </div>
  );
}
