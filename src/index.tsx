import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import store from './store/store'; // Импортируем store
import App from './App';
import '@blueprintjs/core/lib/css/blueprint.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Оборачиваем компонент App в Provider и передаем store
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
