import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import './scss/App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
