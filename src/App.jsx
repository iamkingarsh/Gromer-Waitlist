import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import WaitListPage from './WaitListPage';

function App() {


  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<WaitListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
