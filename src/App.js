import { Provider } from 'react-redux';
import ProductPage from './Pages/ProductPage';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
}

export default App;
