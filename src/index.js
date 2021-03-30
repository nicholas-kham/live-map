import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { analytics } from './config';

function sendToAnalytics({name, delta, value, id}) {
  analytics.logEvent( name, 'event', {
      // Built-in params:
      value: delta, // Use `delta` so the value can be summed.
      // Custom params:
      metric_id: id, // Needed to aggregate events.
      metric_value: value, // Optional.
      metric_delta: delta, // Optional.
      // Any additional params or metadata (e.g. debug information) can be
      // set here as well, within the following limitations:
      // https://support.google.com/analytics/answer/9267744
    transport: 'beacon',
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToAnalytics);
