import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import NewsFeed from './components/news-feed'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  React.createElement(NewsFeed, {}, null),
  document.getElementById('root')
);





serviceWorker.unregister();