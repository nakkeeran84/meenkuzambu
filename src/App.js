import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Products from './Products'
import SearchBanner from './SearchBanner'
import './App.css';
let productList = [
{
  name:'Vancharai',
  oldPrice: 600,
  newPrice: 400,
  quantity: '1 Kg',
  image:'seerfish.jpg',
  id : '1'
},
{
  name:'Sankara',
  oldPrice: 300,
  newPrice: 250,
  quantity: '1 Kg',
  image:'redsnaper.jpeg',
  id : '2'
},
{
  name:'Vaval',
  oldPrice: 350,
  newPrice: 150,
  quantity: '1 Kg',
  image:'black-pomfret.gif',
  id : '3'
},{
  name:'Vancharai',
  oldPrice: 600,
  newPrice: 400,
  quantity: '1 Kg',
  image:'seerfish.jpg',
  id : '4'
},
{
  name:'Sankara',
  oldPrice: 300,
  newPrice: 250,
  quantity: '1 Kg',
  image:'redsnaper.jpeg',
  id : '5'
},
{
  name:'Vaval',
  oldPrice: 350,
  newPrice: 150,
  quantity: '1 Kg',
  image:'black-pomfret.gif',
  id : '6'
},{
  name:'Vancharai',
  oldPrice: 600,
  newPrice: 400,
  quantity: '1 Kg',
  image:'seerfish.jpg',
  id : '7'
},
{
  name:'Sankara',
  oldPrice: 300,
  newPrice: 250,
  quantity: '1 Kg',
  image:'redsnaper.jpeg',
  id : '8'
},
{
  name:'Vaval',
  oldPrice: 350,
  newPrice: 150,
  quantity: '1 Kg',
  image:'black-pomfret.gif',
  id : '9'
}
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {products: productList};
  }
  getInitialState() {
    return {
      products:productList
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <SearchBanner/>
        <Products productlist={this.state.products}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
