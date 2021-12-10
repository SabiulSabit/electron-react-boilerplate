
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Content from './Content';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Content} />
      </Switch>
    </Router>

  );
}
