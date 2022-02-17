import reactRouterDom from 'react-router-dom';
import './App.css';
import { Route, Switch, NavLink } from "react-router-dom"
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MainMenu from './components/MainMenu/MainMenu';
function App() {
  return (
    <div className="App">
      <MainMenu />
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
        {/* <Redirect/> */}
      </Switch>
    </div>
  )
}

export default App;
