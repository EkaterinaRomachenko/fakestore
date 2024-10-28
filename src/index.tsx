import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { ReviewsProvider } from './Context/ReviewsContext';
import { ModalProvider } from './Context/ModalContext';
// Redux
import { Provider } from 'react-redux';
import { store } from './services/store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <ReviewsProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ReviewsProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
