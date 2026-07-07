import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import LiveNavigation from './pages/LiveNavigation';
import Summary from './pages/Summary';
import SavedRoutes from './pages/SavedRoutes';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navigation" element={<LiveNavigation />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/saved" element={<SavedRoutes />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
