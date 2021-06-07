import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './store';
import { connectWeb3 } from './services/Web3Connect';

const store = configure();
console.log(history);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}><App /></ConnectedRouter>
      </Provider>
    )
  };
}

render(<Root />, document.getElementById('root') );
connectWeb3(store.dispatch);