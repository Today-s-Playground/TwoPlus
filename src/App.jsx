import GlobalStyle from './styles/GlobalStyles';
import Router from './shared/Router';
import { Provider } from 'react-redux';
import store from './redux/config/storeMainConfig/gameStore';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
};

export default App;
