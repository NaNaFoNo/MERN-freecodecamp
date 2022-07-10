import React from 'react';
import { Routes, Route, Link,useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from './components/add-review.js';
import Restaurant from './components/restaurants.js';
import RestaurantsList from './components/restaurants-list.js';
import Login from './components/login.js';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  let routeElements = useRoutes([
    { path: "/", element: <RestaurantsList /> },
    { path: "restaurants", element: <RestaurantsList /> },
    { path: "restaurants/:id", element: <Restaurant  user={user} />},
    { path: "restaurants/:id/review", element: <AddReview  user={user} />},
    { path: "login", element: <Login login={login} /> },
  ]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand" data-testid="custom-element">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li>
            { user ? (
              <a onClick={logout} className="nav-link" style={{ cursor: "pointer" }}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        {routeElements}
        {/* <Routes>
          <Route exact path="/" element={<RestaurantsList/>} />
          <Route exact path="/restaurants" element={<RestaurantsList/>} />
          <Route 
            path="/restaurants/:id/review"
            element={<AddReview user={user} />}
          />
          <Route 
            path="/restaurants/:id"
            element={<Restaurant  user={user} />}
          />
          <Route
            path="/login"
            element={<Login login={login}/>}
          />
        </Routes> */}
      </div>
    </div>
  )


}

export default App;
