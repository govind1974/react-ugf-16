import {Link, Routes, Route} from 'react-router-dom'

import { Parent } from './myparent';
import { UnControl } from './uncontrol';
import { Project } from './projectemp';
import { BudgetTracker } from './income-expenses';
var AppRoutes = ()=>{

    return(
        <article className="row">
              <section className="col-3 p-2 m-2 bg-warning  ht" >
                  <div>
                    <Link to="/states" className="btn btn-danger p-1 m-1">State And City</Link>
                  </div>
                  <div>
                    <Link to="/uncontrol" className="btn btn-danger p-1 m-1">UnControl Validate</Link>
                  </div>
                   <div>
                    <Link to="/projects" className="btn btn-danger p-1 m-1">Projects And Employee</Link>
                  </div>
                  <div>
                    <Link to="/budget" className="btn btn-danger p-1 m-1">Budget Tracker</Link>
                  </div>
              </section>
              <section className="col-8 p-2 m-2">
                  <Routes>
                      <Route path="/budget" Component={BudgetTracker}/>
                      <Route path="/projects" Component={Project}/>
                      <Route path="/states" Component={Parent}/>
                      <Route path="/uncontrol" Component={UnControl}/>
                  </Routes>
              </section>
        </article>
    );
}

export default AppRoutes;