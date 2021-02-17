import './App.css';
import { Switch, Route } from 'react-router-dom'
import Disable from './Component/Disable'
import CurrentWeather from './Component/CurrentWeather'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Disable} />
        <Route exact path="/currentweather" component={CurrentWeather} />
      </Switch>
    </div>
  );
}

export default App;
