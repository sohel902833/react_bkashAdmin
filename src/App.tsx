import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/util/PrivateRoute";
import PublicRoute from "./components/util/PublicRoute";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/main/Home";
import AgentList from "./pages/agent/AgentList";
import MainLayoutContainer from "./pages/main/MainLayoutContainer";
import MainAccount from "./pages/main-account/MainAccount";
import UserList from "./pages/users/UserList";
import SingleUserInfoPage from "./pages/users/SingleUserInfo";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayoutContainer />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/agent-list" element={<AgentList />} />
          <Route path="/account-balance" element={<MainAccount />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<SingleUserInfoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
