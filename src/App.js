import './App.css';
import CounterResponsive from './Counter/CounterResponsive';
import ReactGA from 'react-ga';


function App() {

  ReactGA.initialize('G-C87SD1QXBX');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <CounterResponsive/>
  );
}

export default App;
