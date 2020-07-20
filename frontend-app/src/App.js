import React from 'react';
import Home from "./pages/home/home.view";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import PinForm from "./components/pinForm/pinForm.view";
import ListPins from "./components/listPins/listPins.view";
import Board from "./components/board/board.view";
import {BOARD, BOARD_FORM, HOME, LIST_PINS, PINS_FORM} from "./routes/routes";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={LIST_PINS}>ListPins</Link>
        </li>
        <li>
          <Link to={PINS_FORM}>Pin form</Link>
        </li>
        <li>
          <Link to={BOARD_FORM}>Board form</Link>
        </li>
        <li>
          <Link to={BOARD}>Board 1</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route exact path={LIST_PINS}>
          <ListPins />
        </Route>
        <Route exact path={PINS_FORM}>
          Board form
        </Route>
        <Route path={BOARD_FORM}>
          <PinForm />
        </Route>
        <Route path={BOARD}>
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
