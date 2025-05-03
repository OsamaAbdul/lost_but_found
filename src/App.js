import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ReportLost from './components/ReportLost';
import ReportFound from './components/ReportFound';
import NotFound from './components/NotFound';
import ViewItems from './components/ViewItems';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <ul className="flex space-x-6 justify-center">
            <li>
              <Link to="/" className="hover:text-teal-200 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/report-lost" className="hover:text-teal-200 transition-colors duration-200">
                Report Lost
              </Link>
            </li>
            <li>
              <Link to="/report-found" className="hover:text-teal-200 transition-colors duration-200">
                Report Found
              </Link>
            </li>
            <li>
              <Link to="/view-items" className="hover:text-teal-200 transition-colors duration-200">
                View Items
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report-lost" element={<ReportLost />} />
            <Route path="/report-found" element={<ReportFound />} />
            <Route path="/view-items" element={<ViewItems />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;