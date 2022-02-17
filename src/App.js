import reactRouterDom, { Redirect } from 'react-router-dom';
import './App.css';
import { Route, Switch, NavLink } from "react-router-dom"
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MainMenu from './components/MainMenu/MainMenu';
import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
      <MainMenu />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App;
