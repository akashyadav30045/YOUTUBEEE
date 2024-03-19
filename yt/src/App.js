import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Login from './Components/Login/Login';
import Store from "./Components/utils/store/Store";
import {Provider} from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage/WatchPage';
import MainContainer from './Components/MainContainer';

const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
    path:"watch",
    element:<WatchPage/>
  }
]
}])

function App() {
  return (
    <Provider store={Store}>
      <div className="">
        <Head/>
        <RouterProvider router={appRouter}/>
        {/* <Login/> */}

    </div>
    </Provider>
  );
}

export default App;
