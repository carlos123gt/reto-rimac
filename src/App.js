import Login from './pages/login/login';
import PlanMaker from './pages/plan-maker/plan-maker'
import './scss/app.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PublicRouteHoc from './hoc/PublicRouter';

function App() {
 
    {/*<div className="App">
      <Login></Login>
    </div> */}
    return (
      <BrowserRouter>
      <Switch>
         <PublicRouteHoc path="/login" component={Login} /> 
         <PublicRouteHoc path="/tu-plan" component={PlanMaker} /> 
      </Switch>
      </BrowserRouter>
  );
}

export default App;
