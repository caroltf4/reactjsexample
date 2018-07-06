import React, { Component } from 'react';
import PhoneListContainer from './container/PhoneListContainer';
import PhoneDetailContainer from './container/PhoneDetailContainer';
import {Provider} from 'react-redux';
import logo from './logo.svg';

import './App.css';
import {createStore} from 'redux';
import allReducers from './reducers'

import ReactDOM from 'react-dom';
const store=createStore(allReducers);

class App extends Component {

  render() {
	  
	 
    return (
      <div className="App">
	
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Phone Catalog</h1>
        </header>

		
    <div>
       
		<div>
			<PhoneListContainer />
		</div>
        <hr />
     
        <PhoneDetailContainer />
    </div>
      </div>
    );
  }
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
export default App;

