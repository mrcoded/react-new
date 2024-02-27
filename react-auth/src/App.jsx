import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Layout from './component/Layout/Layout';
import UserProfile from './component/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        {/* <Route path='*' element={<Navigate to="/auth" replace />} /> */}
        {authCtx.isLoggedIn && (
          <Route path='/profile' element={<UserProfile />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route path='/profile' element={<Navigate to="/auth" replace />} />
        )}
      </Routes>
    </Layout>
  );
}

export default App;
