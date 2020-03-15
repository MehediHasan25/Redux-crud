import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AddContainer from './component/container/AddContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddContainer />
      </div>
    </Provider>
  );
}

export default App;
