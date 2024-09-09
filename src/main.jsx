import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import './styles.css';
import { JournalApp } from './JournalApp';
import { Provider } from 'react-redux';
import { store } from './store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
    </Provider>

  </StrictMode>,
);