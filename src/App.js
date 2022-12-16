import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<h1>This is the home page</h1>}/>
          <Route path="/about" element={<h1>About us.</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
