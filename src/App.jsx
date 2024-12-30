import { useEffect } from 'react';
import Aos from 'aos';
import Router from './Router';

const App = () => {
  // animation on scroll initioation
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Router />
    </>
  )
}

export default App