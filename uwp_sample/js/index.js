import winjs from 'winjs';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (<h1>hogehoge</h1>);
  }
}

const app = winjs.Application;
let isFirstActivation = true;
app.onactivated = (args) => {
  console.log('onactivated');
  if (isFirstActivation) {
    document.addEventListener('visibilitychange', onVisibilityChanged);
    args.setPromise(winjs.UI.processAll());
  }
  isFirstActivation = false;
};

const onVisibilityChanged = () => {
  console.log('visibilitychange');
  render(<App />, document.getElementById('main'));
};

app.start();