import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './views/Product';
import Home from './views/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      
      <Router>
        <Header />
        <main className='p-4 pb-[10vh]'>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<h1>About us.</h1>}/>
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
