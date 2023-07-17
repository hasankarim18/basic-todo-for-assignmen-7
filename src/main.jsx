import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContextWrapper from './components/Context/TodoContextWrapper';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <TodoContextWrapper>
      <App />
    </TodoContextWrapper>
  </React.Fragment>
);
