//import logo from './logo.svg';
import {Link, Route } from 'react-router-dom';
import './App.css';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      Home page
      <p>
        <Link aria-current ="page" to="/albums" >Albums</Link>
      </p>
      <p>
        <Link aria-current="page" to="/todos" >Todos</Link>
      </p>


      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />





    </div>
  );
}

export default App;
