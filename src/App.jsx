import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import PrivateRoutes from './components/PrivateRoute';

function App() {
  let user = JSON.parse(localStorage.getItem("user"))

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signin" element={!user ? <SignIn /> : <Navigate to={'/'} />} />
        <Route exact path="/signup" element={!user ? <SignUp /> : <Navigate to={'/'} />} />
        
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
