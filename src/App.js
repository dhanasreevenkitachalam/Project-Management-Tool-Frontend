
import './App.css';
import Dashboard from './components/Dashboard';
import Headers from './components/Layout/Headers';
import AddNewProject from './components/Project/AddNewProject';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import {ConfigureStore} from './redux/ConfigureStore';
import { Provider } from 'react-redux';
import { MapDispatchToProps,connect } from 'react-redux';
import { postProject } from './redux/ActionCreaters';
import { withRouter } from 'react-router-dom';
import UpdateProject from './components/Project/UpdateProject';


const store=ConfigureStore();

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
      <div className="App">
          <Headers/>
          
          <Switch>
           <Route path="/home" component={Dashboard} />
           <Route exact path="/addproject" component={AddNewProject} ></Route>
           <Route exact path="/updateProject/:projectIdentifier" component={UpdateProject}/>
          <Redirect to="/home"/>
         
          </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
