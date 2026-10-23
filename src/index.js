import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const staticRoot = document.getElementById('root');

if (staticRoot.dataset.prerendered === 'true') {
  // The page arrived with its content already in the HTML (made by
  // scripts/prerender.js), so visitors and search engines see it at once.
  // Build the live app in a hidden container next to it, and swap it in only
  // when the page's own code has loaded, so nothing flashes or goes blank.
  window.__ZUVIUS_PRERENDERED__ = true;
  const liveRoot = document.createElement('div');
  liveRoot.hidden = true;
  staticRoot.after(liveRoot);
  ReactDOM.createRoot(liveRoot).render(app);

  // No time limit: on a slow phone the page's code can take several seconds,
  // and the saved copy (with working links) is better than a blank page.
  const swapWhenReady = () => {
    const main = liveRoot.querySelector('main');
    const stillLoading = liveRoot.querySelector('[data-route-loading]');
    const ready = main && main.children.length > 0 && !stillLoading;
    if (ready) {
      staticRoot.remove();
      liveRoot.id = 'root';
      liveRoot.hidden = false;
    } else {
      requestAnimationFrame(swapWhenReady);
    }
  };
  requestAnimationFrame(swapWhenReady);
} else {
  ReactDOM.createRoot(staticRoot).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
