import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/Preloader';
import './App.css';

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/home')), 2000);
  });
});

const Footer = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Footer')), 2000);
  });
});

const E404 = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/E404')), 3000);
  });
});

const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/about')), 1000);
  });
});

function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/home' component={Home} />

            <Route path='*' component={E404} />
          </Switch>
        </React.Suspense>
      </Router>
      <React.Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
              fontWeight: 'medium',
            }}
          >
            Loading...
          </div>
        }
      >
        <Footer />
      </React.Suspense>
    </>
  );
}

export default App;
