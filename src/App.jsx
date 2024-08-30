
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Route from './Route';


function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(Route)}/>
    </div>
  );
}
  
export default App;
