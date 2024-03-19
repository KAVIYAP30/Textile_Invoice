

import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup  from './components/Signup';
import Product from './components/Product';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Shop1 from './components/Shop1';




function App() {
  const appRouter=createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Login',
        element:<Login/>,
      },
      {
        path:'/Signup',
        element:<Signup/>,
      },
      {
        path:'/Product',
        element:<Product/>,
      },
      {
        path:'/Contact',
        element:<Contact/>,
      },
      {
        path:'/Shop',
        element:<Shop/>,
      },
      {
        path:'/Shop1',
        element:<Shop1/>,
      },
      
     
      

    ]
  )
  return (
    <div className="App">
     <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
