
import './App.css';
import Dashboard from './components/Dashboard';
import Headers from './components/Layout/Headers';
import AddNewProject from './components/Project/AddNewProject';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Headers/>
          
          <Switch>
           <Route path="/home" component={Dashboard}/>
          <Route exact path="/addproject" component={AddNewProject}></Route>
          <Redirect to="/home"/>
         
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
