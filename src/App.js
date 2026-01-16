import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './components/approutes';
import {ToastContainer} from 'react-toastify';
function App() {
  return (
    <div className="App">
      <header className="bg-success">
           <h1>React Parent Child Demo</h1>
      </header>
      <BrowserRouter>
          <ToastContainer/>
          <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
