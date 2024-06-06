import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './redux/config/configStore.js';
import { Provider } from 'react-redux';
import UserProvider from './api/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
