import React, { Component } from 'react';
import './App.css';


import ProductList from './components/ProductList'


class App extends Component {
  render() {
    

    return (
      <div className='app'>
        <div className='header'>Ты сегодня покормил кота?</div>
        <ProductList />
      </div>
    );
  }
}

export default App;
