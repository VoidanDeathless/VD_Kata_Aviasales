import ReactDOM from 'react-dom/client';
import './index.module.scss';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
